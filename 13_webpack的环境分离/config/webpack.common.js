const resolveApp = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");

const developmentConfig = require("./webpack.dev");
const productionConfig = require("./webpack.prod");
const { ConcatenationScope } = require("webpack");

const commonConfig = {
  entry: "./src/index.js",
  output: {
    filename: "js/bundle.js",
    path: resolveApp("./build"),
    publicPath: "/abc",
  },

  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": resolveApp("./src"),
      js: resolveApp("./src/js"),
      css: resolveApp("./src/css"),
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

module.exports = function (env) {
  // console.log("---env--" + JSON.stringify(env));
  const isProduction = env.production;
  process.env.NODE_ENV = isProduction ? "production" : "development";
  const config = isProduction ? productionConfig : developmentConfig;
  const mergeConfig = merge(commonConfig, config);
  return mergeConfig;
};
