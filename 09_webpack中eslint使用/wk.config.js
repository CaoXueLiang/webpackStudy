const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    filename: 'js/bundle.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_moudles/,
        use: [
          {
            loader: 'babel-loader',
          },
          { loader: 'eslint-loader' },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Babel打包typeScript',
      template: './public/index.html',
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html', '**/DS_Store'],
          },
        },
      ],
    }),
  ],
  mode: 'development',
};
