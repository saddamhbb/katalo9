import "dotenv/config.js";

import "core-js/stable/index.js";
import "regenerator-runtime/runtime.js";

import path from "path";
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import expressStaticGzip from "express-static-gzip";
import cookieParser from "cookie-parser";
import { ChunkExtractor } from '@loadable/server';

import Routes from "./routes.js";
import renderer from "./helpers/renderer.js";
import createStore from "./helpers/createStore.js";
import { apiURL } from "./utilities/url.js";

// Express static gzip config
const compressionConfig = {
  index: false,
  enableBrotli: true,
  customCompressions: [
    {
      encodingName: "deflate",
      fileExtension: "zz"
    }
  ],
  orderPreference: ["br", "gzip"]
};
const PORT = process.env.PORT || 80;
const app = express();

const statsFile = process.env.NODE_ENV === "production"
  ? path.resolve("dist/loadable-stats.json")
  : path.resolve("build/loadable-stats.json");

const extractor = new ChunkExtractor({ statsFile })

app.use(cookieParser());
app.use("/api", proxy(apiURL()));

if (process.env.NODE_ENV === "production") {
  // Return compressed JS and CSS Files (Either gzip or brotli)
  app.use(expressStaticGzip("dist", compressionConfig));
  app.use(expressStaticGzip("dist/static", compressionConfig));
} else {
  // Return un-compressed JS and CSS Files
  app.use(express.static("build"));
  app.use(express.static("build/static"));
}

app.use(express.static("public"));

app.get("/sehat", (req, res) => {
  res.sendStatus(200);
});

app.get("*", (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context, extractor);

    if (context.permanentRedirect) {
      res.status(301);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(PORT, () => {
  console.log("Running on Port " + PORT);
});
