const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  // entry: './src/index.js',
  // entry: './src/react_index.jsx',
  // entry: './src/typescript_index.ts',
  entry: './src/vue_index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    clean: true,
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
        exclude: /node_modules/, //一定要加上，不加的话会出各种各样的异常
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        // use: ['ts-loader'], //使用ts-loader，如果有类型错误会打包失败
        use: ['babel-loader'], //使用babel-loader,如果有类型错误打包成功，不会报错
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
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),
  ],
};
