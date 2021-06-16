import "../css/normal.css";

function createComponment() {
  let elelment = document.createElement("div");
  elelment.className = "elelmentClass";
  elelment.innerHTML = "我是测试内容";
  return elelment;
}

document.body.appendChild(createComponment());
