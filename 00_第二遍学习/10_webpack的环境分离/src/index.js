import { sum } from './math.js';

import Vue from 'vue';
import app from './app.vue';

import '@/index';

console.log('Hello Coderwhy');
console.log('abc');
console.log(sum(20, 80));

if (module.hot) {
  //需要去指定，哪些模块发生更新时，进行`HMR`
  module.hot.accept('./math.js', function () {
    console.log('math模块发生更新了');
  });
}

new Vue({
  render: (h) => h(app),
}).$mount('#app');
