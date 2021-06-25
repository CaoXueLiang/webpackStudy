import { cereateDiv, createSpan } from "js/cereatElement";
import { formateMethod } from "js/formate";
import "js/math";

const tmpDiv = cereateDiv();
const tmpSpan = createSpan();
document.body.appendChild(tmpDiv);
tmpDiv.appendChild(tmpSpan);

console.log("----我是idnex.js");

if (module.hot) {
  module.hot.accept("./js/math.js", () => {
    console.log("math模块发生了更新~");
  });

  module.hot.accept("./js/formate.js", () => {
    console.log("formate模块发生了更新~");
    console.log(formateMethod());
  });
}
