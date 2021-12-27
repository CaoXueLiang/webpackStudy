import _ from 'lodash';
import moment from 'moment';
import '../styles/normal.css';
// import './bar_01';

console.log('Hello Index');
console.log(_.join(['hello', 'Index']));
console.log(moment().format('YYYY-MM-DD'));

function addButtonElement() {
  const button = document.createElement('button');
  button.innerHTML = '加载元素';
  document.body.appendChild(button);
  // preload chunk会随父chunk并行加载。prefetch chunk会在父chunk加载完毕后才开始加载
  // preload chunk具有中等优先级，并立即下载。 preferch chunk会在浏览器空闲时进行下载
  button.onclick = function () {
    import(
      /* webpackChunkName: "element" */
      /* webpackPrefetch: true */
      './element'
    ).then((res) => {
      console.log('element', res.default);
      document.body.appendChild(res.default);
    });
  };
}
addButtonElement();

function addButtonElement2() {
  const button = document.createElement('button');
  button.innerHTML = '加载组件';
  document.body.appendChild(button);
  button.onclick = function () {
    import(
      /* webpackChunkName: "compoment" */
      /* webpackPrefetch: true */
      './compoment'
    ).then((res) => {
      console.log('compoment', res.default);
      document.body.appendChild(res.default);
    });
  };
}
addButtonElement2();
