console.log("--------index.js-------");

const button = document.createElement("button");
button.innerHTML = "加载元素";
button.addEventListener("click", () => {
  // prefetch -> 魔法注释(magic comments)

  import(
    /* webpackChunkName: 'element' */ /* webpackPrefetch: true */ "./element"
  ).then(({ default: element }) => {
    document.body.appendChild(element);
  });
});
document.body.appendChild(button);
