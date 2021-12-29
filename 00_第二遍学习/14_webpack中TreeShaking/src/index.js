import './style.css';

const message = 'Hello World';
console.log(message);

function sum(num1, num2) {
  return arguments[0] + arguments[1];
}

//调用math的方法
console.log(sum(20, 30));

debugger;

const infoMethod = function (message) {
  console.log('message', message);
};
infoMethod('xiaoming-20-hh');

if (false) {
  console.log('哈哈哈');
}

if (true) console.log('sucess log');

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eating() {
    console.log(`name:${this.name}-age:${this.age}`);
  }
}

const person1 = new Person('kobe', 30);
console.log('person1', person1);
