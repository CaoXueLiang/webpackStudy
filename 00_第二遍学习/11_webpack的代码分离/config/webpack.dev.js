const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    // open: true,
    hot: 'only',
    host: '0.0.0.0',
    port: '5520',
    compress: true,
    // proxy: {
    //   '/why': {
    //     target: 'http://127.0.0.1:3000',
    //     pathRewrite: { '^/why': '' },
    //     secure: false,
    //     changeOrigin: true,
    //   },
    // },
    historyApiFallback: true,
  },
};

module.exports = merge(commonConfig, devConfig);
