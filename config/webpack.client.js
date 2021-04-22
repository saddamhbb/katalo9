// Webpack config for client side app
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = {
  entry: "./src/index.js",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "build")
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
          name: "react",
          chunks: "all"
        },
        commons: {
          test: /[\\/]node_modules[\\/]((?!react).*)[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
};

module.exports = merge(baseConfig, config);
