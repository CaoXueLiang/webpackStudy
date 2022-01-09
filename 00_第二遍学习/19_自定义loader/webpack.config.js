const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, './dist'),
    clean: true,
  },
  resolveLoader: {
    modules: ['./cxl_loader', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: {
          loader: 'cxlmd.loader',
          options: {
            name: 'xiaoming',
            age: 18,
            height: 1.99,
          },
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'cxlbabel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '自定义loader',
    }),
  ],
};
