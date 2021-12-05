function sumMethod(num1, num2) {
  return num1 + num2;
}

import { sum, mul } from "./js/math";
import _ from "lodash";

const obj = {
  name: "xiaoming",
  age: 20,
  hobiddes: ["唱歌", "游泳"],
};
let copyObj = _.cloneDeep(obj);
console.log(copyObj);

console.log(sum(10, 30));

console.log(mul(10, 20));
