const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // watch: true, //可以在这配置监听文件的修改，也可以在package.json中设置webpack --watch
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "js/bundle.js",
    path: resolve(__dirname, "build"),
    publicPath: "/abc",
  },

  devServer: {
    hot: true,
    hotOnly: true, //hotOnly是当代码编译失败时，是否刷新整个页面
    host: "0.0.0.0",
    open: true,
    port: "8524",
    publicPath: "/abc", //建议 devServer.publicPath 与 output.publicPath相同
    compress: true, //compress是否为静态文件开启gzip compression
    historyApiFallback: {
      rewrites: [{ from: /abc/, to: "/index.html" }],
    },
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": resolve(__dirname, "./src"),
      js: resolve(__dirname, "./src/js"),
      css: resolve(__dirname, "./src/css"),
    },
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
      title: "webpack中devServe使用",
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
};
