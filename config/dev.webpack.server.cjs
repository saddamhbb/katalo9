// Webpack config for server side app
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./dev.webpack.base.cjs");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  target: "node",
  entry: "./src/server.js",
  output: {
    filename: "server-bundled.cjs",
    path: path.resolve(__dirname, "../build")
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
