import "../css/index.css";
import zzImage from "../img/zznh.png";

function compoment() {
  const divElement = document.createElement("div");
  divElement.innerText = ["hello", "webpack"].join(" ");
  divElement.className = "content";
  return divElement;
}
document.body.appendChild(compoment());

function createImage() {
  const imageElement = document.createElement("img");
  imageElement.src = zzImage;
  document.body.appendChild(imageElement);
}
createImage();

function createDivImage() {
  const divimage = document.createElement("div");
  divimage.className = "bg_image";
  document.body.appendChild(divimage);
}
createDivImage();

function createFontImage(fontName) {
  const spanElement = document.createElement("span");
  spanElement.className = `iconfont ${fontName} icon_image`;
  document.body.appendChild(spanElement);
}
createFontImage("icon-ashbin");
createFontImage("icon-caps-lock");
