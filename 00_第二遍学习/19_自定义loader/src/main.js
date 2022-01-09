import code from './doc.md';
import './style.css';
import 'highlight.js/styles/default.css';
document.body.innerHTML = code;

console.log('Hello Loader');

const message = 'Hello World';
console.log(message);

const foo = () => {
  console.log('foo');
};

foo();
