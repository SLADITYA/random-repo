// A variable can be declared using var, let and const keywords.

// var - global scoped      let, const - local scoped

var a = 10;

console.log(a);
console.log(typeof(a));

var b = "aditya";

console.log(b);
console.log(typeof(b));

var c = true;

console.log(c);
console.log(typeof(c));

var d;

console.log(d);
console.log(typeof(d));

// const declarations must be initialised and you cannot re initialise a value that is declared using const

const e = "Naruto";

// e = "Light Yagami";     // TypeError: Assignment to constant variable.

console.log(e);

// Functions - A peice of code which performs a specific task

function hello()    // function definition
{
    console.log("Hello World");
}

hello();    // function call

// Ecma Script - standard on which javascript is based

// Arrow Functions -> 2015 ES6 feature

const square = (num) =>    // Function Expression
{
    return num * num;
}