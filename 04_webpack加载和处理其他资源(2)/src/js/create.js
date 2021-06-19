import "../css/normal.css";
import zznhImage from "../asserts/snapaste.png";
import "../asserts/font_4jbx2qqc1ip/iconfont.css";

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

function createIconfont(name) {
  let tmpIconfont = document.createElement("div");
  let tmpClassName = `iconfont ${name}`;
  tmpIconfont.className = tmpClassName;
  return tmpIconfont;
}

const normalImage = createImage();
document.body.appendChild(normalImage);

const norDiv = createDiv();
document.body.appendChild(norDiv);

const normalIconfont1 = createIconfont("icon-tianqi");
document.body.appendChild(normalIconfont1);

const normalIconfont2 = createIconfont("icon-shezhi");
document.body.appendChild(normalIconfont2);

const normalIconfont3 = createIconfont("icon-naozhong");
document.body.appendChild(normalIconfont3);

const normalIconfont4 = createIconfont("icon-shangcheng");
document.body.appendChild(normalIconfont4);
