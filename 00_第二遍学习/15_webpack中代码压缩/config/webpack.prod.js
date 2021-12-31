const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const PurgeCssPlugin = require('purgecss-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const InineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const glob = require('glob');
const webpack = require('webpack');
const resolveApp = require('./path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prodConfig = {
  mode: 'development',
  devtool: false,
  optimization: {
    // usedExports: 目的是标注出来哪些函数是没有被使用的
    usedExports: true,
    minimize: true,
    minimizer: [
      // 由Terser将未使用的函数, 从我们的代码中删除
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          compress: {
            arguments: false,
            dead_code: false,
          },
          format: {
            comments: false,
          },
          mangle: false,
          toplevel: true,
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new PurgeCssPlugin({
      paths: glob.sync(`${resolveApp('./src')}/**/*`, { nodir: true }),
      safelist: ['html'],
    }),
    new CompressionPlugin({
      test: /\.(css|js)$/,
      algorithm: 'gzip',
      minRatio: 0.9,
      threshold: 0,
      deleteOriginalAssets: false,
    }),
    new InineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.*\.js$/]),
  ],
};

module.exports = merge(commonConfig('production'), prodConfig);
