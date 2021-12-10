// 创建一个对象，key(路径)：value(函数)
var __webpack_modules__ = {
  './src/js/format.js': function (module) {
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

  './src/js/math.js': function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    'use strict';
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

// 创建一个缓存对象
var __webpack_module_cache__ = {};

function __webpack_require__(moduleId) {
  // 先从缓存中获取，如果缓存中有则直接返回
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  //创建一个对象，并放到缓存中
  var module = (__webpack_module_cache__[moduleId] = {
    exports: {},
  });
  // 执行函数
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  return module.exports;
}

!(function () {
  __webpack_require__.n = function (module) {
    // 根据模块的不同类型，返回不同的对象
    var getter =
      module && module.__esModule
        ? function () {
            return module['default'];
          }
        : function () {
            return module;
          };
    __webpack_require__.d(getter, { a: getter });
    return getter;
  };
})();

!(function () {
  // 在对象上，循环定义属性
  __webpack_require__.d = function (exports, definition) {
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
      }
    }
  };
})();

!(function () {
  // 判断对象上是否存在某个属性
  __webpack_require__.o = function (obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  };
})();

!(function () {
  // 为对象定义`__esModule`属性，表明该对象是ESmodule
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };
})();

var __webpack_exports__ = {};

!(function () {
  // 为__webpack_exports__添加`__esModule`属性
  __webpack_require__.r(__webpack_exports__);
  var _js_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/js/format.js');
  var _js_format__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_js_format__WEBPACK_IMPORTED_MODULE_0__);

  const { sum, mul } = __webpack_require__('./src/js/math.js');

  console.log(sum(20, 30));
  console.log(mul(20, 30));

  console.log((0, _js_format__WEBPACK_IMPORTED_MODULE_0__.dateFormat)('aaa'));
  console.log((0, _js_format__WEBPACK_IMPORTED_MODULE_0__.priceFormat)('bbb'));

  console.log(abc);
})();
