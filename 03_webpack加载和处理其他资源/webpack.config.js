const { resolve } = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(jpeg|jpg|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            // loader: "url-loader", //可以将图片转化为base64
            // options: { limit: 100 * 1024, name: "img/[name].[hash:8].[ext]" },
          },
        ],
      },
    ],
  },
  mode: "development",
};
