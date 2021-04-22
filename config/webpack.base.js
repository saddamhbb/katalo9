const path = require("path");
const Dotenv = require("dotenv-webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob");

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
        include: [path.resolve(__dirname, "src/client")],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(scss)$/,
        include: [path.resolve(__dirname, "src/static")],
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
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "src/components"),
      Pages: path.resolve(__dirname, "src/pages"),
      Store: path.resolve(__dirname, "src/store"),
      Helpers: path.resolve(__dirname, "src/helpers"),
      Utilities: path.resolve(__dirname, "src/utilities")
    }
  },
  plugins: [
    new Dotenv({ systemvars: true }),
    new MiniCssExtractPlugin({
      filename: "/static/css/components.css",
      chunkFilename: "[id].css"
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${path.resolve(__dirname, "src")}/**/*`, { nodir: true })
    }),
    new OptimizeCssAssetsPlugin({ canPrint: false }),
    new CopyPlugin([
      { from: "src/static/fonts", to: "static/fonts" },
      { from: "src/static/img", to: "static/img" }
    ]),
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
    })
  ]
};
