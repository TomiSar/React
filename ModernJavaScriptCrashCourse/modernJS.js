//** Promises and Async/Await **//
//fetch (URL), response json and log data from response URL data
//const fecth = require('fetch');
// const fetchData = () => {
//     fetch('https://api.github.com').then(resp => {
//         resp.json().then(data => {
//             console.log(data);
//         });
//     });
// };
// fetchData();

//const fetchData = async () => {
//     const response = await fetch('https://api.github.com/');
//     const data = await response.json();
//     console.log(data);
// }

// fetchData();
// console.log(fetchData());

//** Classes **//
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// class Student extends Person {
//     constructor(name, level) {
//         super(name);
//         this.level = level;
//     }
//     greet() {
//         console.log(`Hello ${this.name} from ${this.level}`);
//     }
// }

// const obj1 = new Person("Max");
// const obj2 = new Student("Tina", "1st Grade");
// const obj3 = new Student("Sam", "2st Grade");

// console.log();
// obj3.greet = () => console.log('I am very special!!'); //obj3.greet() override
// obj1.greet();
// obj2.greet();
// obj3.greet();

//** Template Strings **//
// const greeting = 'Hello world';
// const answer = 'Forty two';

// const html = `
//     <div>
//         ${Math.random()}
//     </div>`;

// console.log(html);

//** Destructuring and Rest/Spread **//
// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

// Somewhere in a React App
// const {Component, Fragment, useState} = require('react');
// usetState()
// const data = {
//     temp1: '001',
//     temp2: '002',
//     firstName: 'John',
//     lastName: 'Doe',
// }

// const {temp1, temp2, ...person} = data;
// const newArray = [...restOfItems];

// const newObject = {
//     ...person
// };

// console.log(person)

// const [first, ...restOfitems] = [10, 20, 30, 40];
// console.log(first);
// console.log(restOfitems); //first element is skipped 

//constants can be defined on a same line 
//const { PI, E, SQRT2 } = Math;

// const circle = {
//     label: 'circleX',
//     radius: 10,
// }

// const circleArea = ({ radius }, { precision = 2 } = {}) =>
//     (PI * Math.pow(radius, 2)).toFixed(precision);

// console.log(circleArea(circle, { precision: 5 }) //five decimals
// );

// const [first, second, third, fourth] = [10, 20, 30, 40];
//const [first, second,, fourth] = [10, 20, 30, 40]; //3rd element will be deleted

// const circleArea = ({ radius }, { precision = 2 } = {}) =>
//     (PI * radius * radius).toFixed(precision);

//     circleArea(circle, { precision: 5 });
// };

// console.log();
// console.log(circleArea(3));

//** Object literals **//
// const inverseOfPI = 1 / Math.PI;
// const mystery = 'answer';
// const obj = {
//     p1: 10,
//     p2: 20,
//     f1() {},
//     f2: () => {},
//     [mystery]: 42,
//     inverseOfPI: inverseOfPI,
// }

// console.log();
// console.log(inverseOfPI);

//console.log(obj.answer);
//console.log(obj.mystery); //undefined

//** Arrow functions **// 
// const square = (a) => {
//     return Math.pow(a, 2);
// }
// const square2 = (a) => Math.pow(a, 2);
// //const square3 = a => a * a;
// const square3 = a => Math.pow(a, 3);
// [1, 2, 3, 4].map(a => Math.pow(a, 2));

// console.log();
// console.log(square2(3));    //3*3   
// console.log(square3(3));    //3*3*3

// const testerObject = {
//     func1: function() {
//         console.log('func1', this);
//     },

//     func2: () => {
//         console.log('func2', this);
//     }
// };

// testerObject.func1();
// testerObject.func2();

//** Variables and block scopes **//
//https://jscomplete.com/playground/const
//https://jscomplete.com/playground/scopes
// const answer = 42;
// const greeting = 'Hello';

// //Array and objects
// const numbers = [2, 4, 6];
// const person = {
//     firstName: 'John',
//     lastName: 'Doe'
// }

// console.log();
// console.log(numbers)
// console.log(person);
// console.log(`Hello ${person.firstName} ${person.lastName} !! Nice to meet you.`);
// console.log(`First name: ${person.firstName}`);
// console.log(`Last name: ${person.lastName}`)