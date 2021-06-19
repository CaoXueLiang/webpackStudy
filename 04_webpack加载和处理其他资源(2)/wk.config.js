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
        type: "asset",
        generator: {
          filename: "img/[name].[hash:8].[ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
      {
        test: /\.(ttf|woff|eot)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name].[hash:8].[ext]",
        },
      },
      // {
      //   test: /\.(jpeg|jpg|png|svg)$/,
      //   type: "asset/resource",
      //   generator: {
      //     filename: "img/[name].[hash:8].[ext]",
      //   },
      // },
    ],
  },
  mode: "development",
};
