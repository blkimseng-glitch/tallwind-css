// const { promise } = require("enhanced-resolve");


// function myFunction(callback){
//     setTimeout(() =>{
//         const data = {name: "Aman", age: 21 };
//         callback(data);
//     }, 3000);
// }

// myFunction((data) => {
//     console.log("Data: ", data)
// });


// console.log("start");

// setTimeout(() => {
//     console.log("setTimeout Callback");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise Resolved");
// });

// console.log('end');
let a = 4;
let b = -5;
let c = -12;


const delta = Math.pow(-b, 2) - 4 * a * c; 
console.log("delta: " + Math.sqrt(delta));


let x1 = (-b - Math.sqrt(delta)) / (2 * a);
console.log("x1: " + x1);

