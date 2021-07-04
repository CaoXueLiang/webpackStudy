import _ from "lodash";
import dayjs from "dayjs";
let count = 1;
let array1 = [1, 2];
let array2 = [3, 4];
console.log(_.concat(array1, array2));
console.log(dayjs("2018-08-08"));
console.log("--------index.js-------" + count++);

const button = document.createElement("button");
button.innerHTML = "按钮";
document.body.appendChild(button);
button.onclick = function () {
  import(/* webpackChunkName: "element" */ "./element").then(
    ({ default: element }) => {
      console.log(element);
      document.body.appendChild(element);
    }
  );
};
