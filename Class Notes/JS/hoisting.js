// Hoisting in JavaScript - Javascript's default behaviour of moving declarations to the top

// Temporal Dead Zone (TDZ) starts here

console.log(a);
// console.log(b);    // ReferenceError: Cannot access 'b' before initialization

var a = 10;
let b = 20;    // TDZ ends here

console.log(b);

// Func declarations are also hoisted. You can call any func before declaring them.

console.log(square(a));

function square (num)
{
    return num * num;
}

// Function Expressions are not hoisted

// var square = (num) =>  // This function expression is treated as a variable
// {
//     return num * num;
// }

// console.log(square(a));