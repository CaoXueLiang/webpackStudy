class HelloWebpackPlugin {
  constructor(options = {}) {
    console.log('options:', options);
  }
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync('HelloWebpackPlugin', (compilation, callback) => {
      setTimeout(() => {
        console.log('-------输出文件成功----');
        callback();
      }, 2000);
    });
  }
}

module.exports = HelloWebpackPlugin;
