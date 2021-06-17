import "../css/normal.css";
import "../css/tmpless.less";
import "../css/tmpsass.scss";

function createComponment() {
  let elelment = document.createElement("div");
  elelment.className = "elelmentClass contentFontsize backgroundcontent";
  elelment.innerHTML = "我是测试内容";
  return elelment;
}

document.body.appendChild(createComponment());
