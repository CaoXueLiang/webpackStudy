const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'), //打包后的文件输出目录
    // publicPath: './abc', //在打包之后的静态资源前面进行一个路径的拼接，（域名 + publicPath + '静态资源地址'）
    clean: true,
  },
  devServer: {
    open: true,
    hot: 'only',
    // host: '0.0.0.0',
    // port: '5520',
    static: 'why', //默认值是public，从目录配置静态文件的选项
    compress: true,
    proxy: {
      '/why': {
        target: 'http://127.0.0.1:3000',
        pathRewrite: { '^/why': '' }, //路径重写，不传递`why`
        secure: false, //默认情况下，不接受在https运行，且证书无效的后端服务器。如果需要可以修改配置为false
        changeOrigin: true, //默认情况下，代理会保留主机头的来源，可以将`changeOrigin设置为true`覆盖该行为
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'bable的使用',
      template: './index.html',
    }),
    new VueLoaderPlugin(),
  ],
};
