// print output in terminal. Press play button on the left to run the code.
console.log(55);

// comment in javascript

console.log(Math.ceil(5.20));

// variables in javascript
var name = "John";      // var variable can be updated and re-declared   (function or global scope)   
let age = 30;   // let variable can be updated but not re-declared.       (block scope)
const pi = 3.14;  // constant variable cannot be updated                    (block scope)

// Data types in JavaScript
var  x = 5;          // number
var  y = "Hello";    // string
var  z = true;       // boolean

var  a = null;       // null
var  b;              // undefined

// Non-primitive data types in JavaScript
var  obj = {name: "John", age: 30};   // object
var  d = [1, 2, 3];   // array

console.log(obj.name);  // Accessing object property
console.log(obj.age);   // Accessing object property


console.log(typeof obj);  // Output: object
console.log(typeof d);    // Output: object (arrays are considered objects in JavaScript)

// ---------------------------------------------------------------------------------------  // 

// Functions in JavaScript
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));  // Output: Hello, Alice!


// ---------------------------------------------------------------------------------------  // 

// Arrow function syntax in JavaScript
let greetArrow = (name) => {
    return "Hello, " + name + "!";
}

console.log(greetArrow("Bob"));  // Output: Hello, Bob!

// ---------------------------------------------------------------------------------------  // 

