const resolveApp = require('./path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (enviroment) => {
  const isProduction = enviroment === 'production';
  return {
    entry: { index: './src/index.js' },
    output: {
      filename: '[name].bundle.js',
      chunkFilename: 'chunk-[name].[chunkhash:6].js',
      path: resolveApp('./dist'),
      clean: true,
    },
    resolve: {
      mainFiles: ['index'],
      extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.ts', '.vue'],
      alias: {
        imgs: resolveApp('./assets/img'),
        '@': resolveApp('./views'),
      },
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
      splitChunks: {
        chunks: 'all',
        minSize: 200000,
        maxSize: 200000,
        minChunks: 1,
        maxAsyncRequests: 30,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            filename: '[id]_vendor.js',
            priority: -10,
          },
          default: {
            minChunks: 2,
            filename: 'common_[id].js',
            priority: -20,
          },
          bar: {
            test: /bar_/,
            filename: '[id]_bar.js',
          },
        },
      },
      runtimeChunk: {
        name: 'runtime-chunk',
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
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
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
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
            filename: 'img/[name].[content:6].[ext]',
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
};
