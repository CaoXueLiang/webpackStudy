import "../css/normal.css";
import zznhImage from "../asserts/xiaoxin.jpeg";

function createImage() {
  let tmpImage = new Image();
  // tmpImage.src = require("../asserts/xiaoxin.jpeg");
  tmpImage.src = zznhImage; //使用这种方式才能加载图片
  return tmpImage;
}

function createDiv() {
  let tmpDiv = document.createElement("div");
  tmpDiv.className = "divImage";
  return tmpDiv;
}

const normalImage = createImage();
document.body.appendChild(normalImage);

const norDiv = createDiv();
document.body.appendChild(norDiv);
