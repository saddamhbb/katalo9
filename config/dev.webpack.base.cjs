const path = require("path");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
// const PurgecssPlugin = require("purgecss-webpack-plugin");
// const glob = require("glob");
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: "/node_modules/"
      },
      {
        test: /\.(scss)$/,
        include: [path.resolve(__dirname, "../src/pages"), path.resolve(__dirname, "../src/components")],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(scss)$/,
        include: [path.resolve(__dirname, "../src/static")],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "/static/css/[name].css"
            }
          },
          {
            loader: "extract-loader"
          },
          "css-loader",
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      }
    ]
  },
  plugins: [
    new Dotenv({ systemvars: true }),
    new MiniCssExtractPlugin(),
    // new CopyPlugin([
    //   { from: "src/static/fonts", to: "static/fonts" },
    //   { from: "src/static/img", to: "static/img" }
    // ]),
    new LoadablePlugin()
  ]
};
