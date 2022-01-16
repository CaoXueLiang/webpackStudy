const { resolve } = require('path');
const HelloWebpackPlugin = require('./plugin/HelloWebpackPlugin');
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, './dist'),
  },
  plugins: [new HelloWebpackPlugin({ name: 'hello plugin' })],
};
