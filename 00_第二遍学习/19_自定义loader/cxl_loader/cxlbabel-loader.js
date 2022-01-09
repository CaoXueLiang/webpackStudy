//注意要安装2.0版本，安装3.0版本没这个方法了
const { getOptions } = require('loader-utils');
const babel = require('@babel/core');

module.exports = function (content, map, meta) {
  const callback = this.async(); //设置为异步loader
  const options = getOptions(this); //获取参数
  babel.transform(content, options, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.code);
    }
  });
};
