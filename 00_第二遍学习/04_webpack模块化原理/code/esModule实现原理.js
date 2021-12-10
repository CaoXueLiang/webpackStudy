var __webpack_modules__ = {
  './src/js/math.js': function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, {
      sum: function () {
        return sum;
      },
      mul: function () {
        return mul;
      },
    });
    const sum = (num1, num2) => {
      return num1 + num2;
    };

    const mul = (num1, num2) => {
      return num1 * num2;
    };
  },
};

//创建缓存对象
var __webpack_module_cache__ = {};

//根据路径，获取对应的模块
function __webpack_require__(moduleId) {
  //先判断是否存在缓存，如果存在直接返回
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  //否则将`moduleId`,对应的对象加入缓存
  var module = (__webpack_module_cache__[moduleId] = {
    exports: {},
  });
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  return module.exports;
}

!(function () {
  // 循环定义多个属性，值为get方法
  __webpack_require__.d = function (exports, definition) {
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
      }
    }
  };
})();

!(function () {
  __webpack_require__.o = function (obj, prop) {
    //判断对象上，是否存在某个属性key
    return Object.prototype.hasOwnProperty.call(obj, prop);
  };
})();

!(function () {
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      //定义 `Symbol.toStringTag`属性，值为`Module`
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }

    // 添加`__esModule`属性，标明是 esModule模块
    Object.defineProperty(exports, '__esModule', { value: true });
  };
})();

var __webpack_exports__ = {};

!(function () {
  __webpack_require__.r(__webpack_exports__);
  var _js_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/js/math.js');
  // 当前的值为
  console.log(Object.getOwnPropertyDescriptors(_js_math__WEBPACK_IMPORTED_MODULE_0__));

  console.log((0, _js_math__WEBPACK_IMPORTED_MODULE_0__.sum)(10, 20));
  console.log((0, _js_math__WEBPACK_IMPORTED_MODULE_0__.mul)(10, 20));
})();
