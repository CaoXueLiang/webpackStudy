const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'), //打包后的文件输出目录
    // publicPath: './abc', //在打包之后的静态资源前面进行一个路径的拼接，（域名 + publicPath + '静态资源地址'）
    clean: true,
  },
  devServer: {
    open: true,
    hot: 'only',
    host: '0.0.0.0',
    port: '5520',
    static: 'why', //默认值是public，从目录配置静态文件的选项
    compress: true,
    proxy: {
      '/why': {
        target: 'http://127.0.0.1:3000',
        pathRewrite: { '^/why': '' }, //路径重写，不传递`why`
        secure: false, //默认情况下，不接受在https运行，且证书无效的后端服务器。如果需要可以修改配置为false
        changeOrigin: true, //默认情况下，代理会保留主机头的来源，可以将`changeOrigin设置为true`覆盖该行为
      },
    },
    historyApiFallback: true,
  },
  resolve: {
    //如果是一个文件夹，会在文件夹中根据 resolve.mainFiles配置选项中指定的文件顺序查找。mainFiles默认值是`["index"]`,之后在根据`resolve.extensions`来解析扩展名
    mainFiles: ['index'],
    //默认值是`['.wasm', '.mjs', '.js', '.json']`,尝试按顺序解析这些后缀名, 你可以使用 '...' 访问默认拓展名
    extensions: ['.js', '.vue', '...'],
    //设置别名,注意路径问题
    alias: {
      imgs: resolve(__dirname, './assets/img'),
      '@': resolve(__dirname, './views'),
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
      template: './index.html',
    }),
    new VueLoaderPlugin(),
  ],
};
