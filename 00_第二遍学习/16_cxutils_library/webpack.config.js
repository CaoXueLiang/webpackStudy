const { resolve } = require('path');
module.exports = {
  mode: 'production',
  devtool: false,
  entry: './index.js',
  output: {
    filename: 'cxl_utils.js',
    path: resolve(__dirname, 'dist'),
    clean: true,
    library: {
      name: 'CXlUtils',
      type: 'umd',
    },
  },
};
