const resolveApp = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");

const developmentConfig = require("./webpack.dev");
const productionConfig = require("./webpack.prod");
const { ConcatenationScope } = require("webpack");

const commonConfig = {
  entry: {
    index: "./src/index.js",
    main: "./src/main.js",
    // index: { import: "./src/index.js", dependOn: "shared" },
    // main: { import: "./src/main.js", dependOn: "shared" },
    // shared: ["lodash"],
  },
  output: {
    filename: "js/[name].bundle.js",
    chunkFilename: "js/chunk_[id]_[name].js",
    path: resolveApp("./build"),
    // publicPath: "/abc",
  },

  resolve: {
    extensions: [".js", ".vue", ".json"],
  },
  optimization: {
    // natural ,namned ,deterministic
    chunkIds: "deterministic",
    //1. true(针对每个入口文件打包一个runtime)  2. single（打包一个runtime文件）  3. name（定义runtimeChunk文件的名字）
    // runtimeChunk: "single",
    runtimeChunk: {
      name: "runtimesssss",
    },
    splitChunks: {
      chunks: "all",
      // 最小尺寸: 如果拆分出来一个, 那么拆分出来的这个包的大小最小为minSize
      minSize: 20000,
      // 将大于maxSize的包, 拆分成不小于minSize的包
      maxSize: 20000,
      minChunks: 1,
      cacheGroups: {
        venders: {
          test: /[\\/]node_modules[\\/]/,
          filename: "js/[id]_vender.js",
          priority: -10,
        },
        default: {
          minChunks: 2,
          filename: "js/common_[id].js",
          priority: -20,
        },
      },
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
