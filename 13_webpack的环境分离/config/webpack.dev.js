module.exports = {
  mode: "development",
  devtool: "source-map",
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
};
