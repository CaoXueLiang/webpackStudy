const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { DefinePlugin } = require("webpack");
module.exports = {
  devtool: "cheap-source-map",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "模块化原理标题",
      template: "./public/index.html",
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/index.html", "**/DS_Store"],
          },
        },
      ],
    }),
  ],
  mode: "development",
};
