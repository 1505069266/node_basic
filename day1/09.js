



// 1.值类型
// let num1 = 30;
// let num2 = num1;
// num1 +=10;
// console.log(num1); //40
// console.log(num2); //30


// //引用类型
// let obj1 = {};
// let obj2 = obj1;
// obj2.name = '璇璇';
// console.log(obj1.name); //璇璇
// console.log(obj2.name); //璇璇

// let md = new Object();
// md.exp = new Object({name: '哈哈哈'});

// let exp = md.exp;

// // exp.name = '璇璇'

// exp = {name: '张三'}

// console.log(exp.name);
// console.log(md.exp.name);

let person = require('./person')

let p = new person('xuan',18,'nv')

console.log(p);
