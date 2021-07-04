import _ from "lodash";
let array1 = [5, 6];
let array2 = [3, 4];
console.log(_.concat(array1, array2));
console.log("--------main.js-------");

// // 只要是异步导入的代码, webpack都会进行代码分离
// // webpackChunkName 魔法注释
import(/* webpackChunkName: "bar_01" */ "./bar_01").then((res) => {
  console.log(res);
});

import(/* webpackChunkName: "bar_02" */ "./bar_02").then((res) => {
  console.log(res);
});
