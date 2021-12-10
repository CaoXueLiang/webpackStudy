// 定义一个对象 => 模块路径(key) : 函数(value这个模块的值)
var __webpack_modules__ = {
  "./src/js/format.js": function (module) {
    const dateFormat = (date) => {
      return date;
    };
    const priceFormat = (price) => {
      return price;
    };
    module.exports = {
      dateFormat,
      priceFormat,
    };
  },
};

// 模块的缓存
var __webpack_module_cache__ = {};

function __webpack_require__(moduleId) {
  // 首先判断该模块是否存在缓存中，若存在直接返回
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }

  // 创建module对象，里面有一个exports属性
  // `{exports:{}}`
  var module = (__webpack_module_cache__[moduleId] = {
    exports: {},
  });

  // `__webpack_modules__[moduleId]` 根据文件路径，获取路径对应的函数
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  return module.exports;
}

var __webpack_exports__ = {};

// 自执行函数
!(function () {
  const { dateFormat, priceFormat } = __webpack_require__("./src/js/format.js");
  console.log(dateFormat("2021-10-11"));
  console.log(priceFormat("100.00"));
})();
