const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const PurgeCssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const webpack = require('webpack');
const resolveApp = require('./path');

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
    //对作用域进行提升，并且让webpack打包后的代码更小、运行更快
    //Scope Hoisting可以将函数合并到一个模块中来运行；
    new webpack.optimize.ModuleConcatenationPlugin(),
    /**
     * paths：表示要检测哪些目录下的内容需要被分析，这里我们可以使用glob；
     * 默认情况下，Purgecss会将我们的html标签的样式移除掉，如果我们希望保留，可以添加一个safelist的属性；
     * purgecss也可以对less文件进行处理（所以它是对打包后的css进行tree shaking操作）；
     */
    new PurgeCssPlugin({
      paths: glob.sync(`${resolveApp('./src')}/**/*`, { nodir: true }),
      safelist: ['html'],
    }),
  ],
};

module.exports = merge(commonConfig('production'), prodConfig);
