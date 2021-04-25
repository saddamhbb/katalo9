import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";

import Routes from "../routes";

const renderer = (req, store, context, extractor) => {

  const content = renderToString(extractor.collectChunks(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <>{renderRoutes(Routes)}</>
      </StaticRouter>
    </Provider>
  ));

  const helmet = Helmet.renderStatic();

  return `
        <!DOCTYPE html>
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" />
                <meta charset="UTF-8">
                ${helmet.link.toString()}
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oleo+Script&family=Roboto&display=swap" >
                <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
                <link rel="stylesheet" href="/css/main.css" />
                ${extractor.getLinkTags()}
                ${extractor.getStyleTags()}
            </head>
            <body>
                <div id="root">${content}</div>
                ${extractor.getScriptTags()}
                <script>
                  window.INITIAL_STATE=${serialize(store.getState())};
                </script>
            </body>
        </html>
    `;
};

export default renderer;
