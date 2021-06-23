import "core-js/stable";
import "regenerator-runtime/runtime";

import { formateDate } from "../src/js/format";
import { sum, mul } from "../src/js/math";

console.log(formateDate());
console.log(sum(10, 20));
console.log(mul(10, 20));

let tmpArray = ["xiao_ming", "xiao_hong", "xiao_liang", "li_ning"];
tmpArray.forEach((item) => {
  console.log(item);
});

function requestMethod() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("倒计时结束");
    }, 1000);
  });
}

requestMethod().then((res) => {
  console(res);
});
