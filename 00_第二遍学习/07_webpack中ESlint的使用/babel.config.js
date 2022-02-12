module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // 1.false: 不用任何的polyfill相关的代码
        // 2.usage: 代码中需要哪些polyfill, 就引用相关的api
        // 3.entry: 手动在入口文件中导入 core-js/regenerator-runtime, 根据目标浏览器引入所有对应的polyfill
        // import "core-js/stable";
        // import "regenerator-runtime/runtime";
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    ['@babel/preset-react'],
    ['@babel/preset-typescript'],
  ],
};
