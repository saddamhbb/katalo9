// Webpack config for client side app
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.cjs");

const config = {
  entry: "./src/index.js",
  output: {
    filename: "[name]-bundled.js",
    path: path.resolve(__dirname, "../dist")
  },
  optimization: {
    moduleIds: 'named',
    chunkIds: 'named'
  }
};

module.exports = merge(baseConfig, config);
