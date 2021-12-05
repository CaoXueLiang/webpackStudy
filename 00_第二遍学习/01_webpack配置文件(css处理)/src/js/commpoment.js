import "../css/index.css";
import "../css/comment.less";

function compoment() {
  const divElement = document.createElement("div");
  divElement.innerText = ["hello", "webpack"].join(" ");
  divElement.className = "content";
  return divElement;
}

document.body.appendChild(compoment());
