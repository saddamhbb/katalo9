const path = require("path");
const Dotenv = require("dotenv-webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");

module.exports = {
  mode: "production",
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
        include: [
          path.resolve(__dirname, "../src/pages"),
          path.resolve(__dirname, "../src/components")
        ],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new Dotenv({ systemvars: true }),
    new MiniCssExtractPlugin(),
    new OptimizeCssAssetsPlugin({ canPrint: false }),
    new CompressionPlugin({
      test: /\.(css|js)$/,
      filename: "[path].br[query]",
      algorithm: "brotliCompress",
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false
    }),
    new CompressionPlugin({
      test: /\.(css|js)$/,
      algorithm: "gzip"
    }),
    new LoadablePlugin()
  ]
};
