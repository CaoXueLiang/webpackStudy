const resolveApp = require('./path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  //1、多入口起点
  // entry: {
  //   index: './src/index.js',
  //   main: './src/main.js',
  // },

  //2、入口依赖(entry dependencies)
  // entry: {
  //   index: { import: './src/index.js', dependOn: 'shared' },
  //   main: { import: './src/main.js', dependOn: 'shared' },
  //   shared: ['lodash', 'moment'],
  // },
  entry: { index: './src/index.js' },
  output: {
    filename: '[name].bundle.js',
    //动态导入通常是一定会打包成独立的文件的，所以并不会再cacheGroups中进行配置。那么它的命名我们通常会在output中，通过 chunkFilename 属性来命名；
    chunkFilename: 'chunk-[name].[hash:6].js',
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
    //①、natural自然数 ②、named development下的默认值，一个可读写的名称id ③、deterministic 确定性的，在不同的编译中不变的短数字id
    // chunkIds: 'deterministic ',
    splitChunks: {
      chunks: 'all', // async异步导入, initial同步导入，all 异步/同步导入
      minSize: 20000, //拆分包的大小，至少为 200，如果一个包拆分出来达不到minsize，那么这个包就不会拆分
      // maxSize: 20000, //将大于maxSize的包，拆分成不小于minSize的包
      minChunks: 1, //表示引入的包，至少被导入的次数
      maxAsyncRequests: 30, //按需加载时的最大请求并发数
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
