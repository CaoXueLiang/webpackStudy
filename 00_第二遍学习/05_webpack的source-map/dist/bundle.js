/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/format.js":
/*!***********************!*\
  !*** ./src/format.js ***!
  \***********************/
/***/ ((module) => {

eval("const dateFormat = (date) => {\n  return '2020-12-12';\n};\n\nconst priceFormat = (price) => {\n  return '100.00';\n};\n\n// console.log(cba);\n\nmodule.exports = {\n  dateFormat,\n  priceFormat,\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9ybWF0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3VyY2VtYXAvLi9zcmMvZm9ybWF0LmpzPzM2YWUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGF0ZUZvcm1hdCA9IChkYXRlKSA9PiB7XG4gIHJldHVybiAnMjAyMC0xMi0xMic7XG59O1xuXG5jb25zdCBwcmljZUZvcm1hdCA9IChwcmljZSkgPT4ge1xuICByZXR1cm4gJzEwMC4wMCc7XG59O1xuXG4vLyBjb25zb2xlLmxvZyhjYmEpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0ZUZvcm1hdCxcbiAgcHJpY2VGb3JtYXQsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/format.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ \"./src/math.js\");\n\nconst { dateFormat, priceFormat } = __webpack_require__(/*! ./format */ \"./src/format.js\");\n\nconsole.log((0,_math__WEBPACK_IMPORTED_MODULE_0__.sum)(20, 30));\nconsole.log((0,_math__WEBPACK_IMPORTED_MODULE_0__.mul)(20, 30));\n\nconsole.log(dateFormat('aaa'));\nconsole.log(priceFormat('bbb'));\n\nconsole.log(abc);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7QUFDbEMsUUFBUSwwQkFBMEIsRUFBRSxtQkFBTyxDQUFDLGlDQUFVOztBQUV0RCxZQUFZLDBDQUFHO0FBQ2YsWUFBWSwwQ0FBRzs7QUFFZjtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc291cmNlbWFwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3VtLCBtdWwgfSBmcm9tICcuL21hdGgnO1xuY29uc3QgeyBkYXRlRm9ybWF0LCBwcmljZUZvcm1hdCB9ID0gcmVxdWlyZSgnLi9mb3JtYXQnKTtcblxuY29uc29sZS5sb2coc3VtKDIwLCAzMCkpO1xuY29uc29sZS5sb2cobXVsKDIwLCAzMCkpO1xuXG5jb25zb2xlLmxvZyhkYXRlRm9ybWF0KCdhYWEnKSk7XG5jb25zb2xlLmxvZyhwcmljZUZvcm1hdCgnYmJiJykpO1xuXG5jb25zb2xlLmxvZyhhYmMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sum\": () => (/* binding */ sum),\n/* harmony export */   \"mul\": () => (/* binding */ mul)\n/* harmony export */ });\nconst sum = (num1, num2) => {\n  return num1 + num2;\n};\n\nconst mul = (num1, num2) => {\n  return num1 * num2;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWF0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3VyY2VtYXAvLi9zcmMvbWF0aC5qcz81YTAzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdW0gPSAobnVtMSwgbnVtMikgPT4ge1xuICByZXR1cm4gbnVtMSArIG51bTI7XG59O1xuXG5leHBvcnQgY29uc3QgbXVsID0gKG51bTEsIG51bTIpID0+IHtcbiAgcmV0dXJuIG51bTEgKiBudW0yO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/math.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;