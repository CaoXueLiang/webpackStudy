const resolveApp = require('./path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolveApp('./dist'),
    clean: true,
  },
  resolve: {
    mainFiles: ['index'],
    extensions: ['.js', '.vue', '...'],
    alias: {
      imgs: resolveApp('./assets/img'),
      '@': resolveApp('./views'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
        ],
      },
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
      {
        test: /\.(jpg|png)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:6].[ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'bable的使用',
      template: resolveApp('./index.html'),
    }),
    new VueLoaderPlugin(),
  ],
};
