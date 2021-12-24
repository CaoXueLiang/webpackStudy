const resolveApp = require('./path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  //1、多入口起点
  entry: {
    index: './src/index.js',
    main: './src/main.js',
  },

  //2、入口依赖(entry dependencies)
  // entry: {
  //   index: { import: './src/index.js', dependOn: 'shared' },
  //   main: { import: './src/main.js', dependOn: 'shared' },
  //   shared: ['lodash', 'moment'],
  // },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[hash:6].chunk.js',
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
      chunks: 'all', // async异步导入, initial同步导入，all 异步/同步导入
      minSize: 200000, //拆分包的大小，至少为 200，如果一个包拆分出来达不到minsize，那么这个包就不会拆分
      maxSize: 200000, //将大于maxSize的包，拆分成不小于minSize的包
      minChunks: 1, //表示引入的包，至少被导入的次数
      maxAsyncRequests: 30, //按需加载时的最大请求并发数
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          filename: '[id]_vendor.js',
          priority: -10,
        },
      },
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
