// In Arrays, you can hold multiple values within a single variable. Arrays are mutable.

const fruits = ['apple', "banana", "grapes", 6];

const vegetables = ['potatoes', 'onion'];

const numbers = [1, 2, 3, 4, 5];

console.log(typeof(fruits));

console.log(fruits[1]);

console.log(fruits.length);

fruits[2] = "oranges";

console.log(fruits);

const newArray = fruits.toString();

console.log(typeof(newArray));

const joined = fruits.join("-");

console.log(joined);

console.log(fruits.concat(vegetables, numbers));    // returns a new Array

console.log(fruits.pop());   // Removes the last element from the array and returns the popped element

console.log(fruits);

console.log(fruits.push("watermelon")); // Adds the element at the end and returns the length of new Array

console.log(fruits);

console.log(fruits.shift());   // Removes the first element from the array and returns the popped element

console.log(fruits);

console.log(fruits.unshift("mangoes")); // Adds the element at the front and returns the length of new Array

console.log(fruits);

delete(fruits[1]);

console.log(fruits);

fruits.sort();  // modifies the original array (Lexicographical Sort)

console.log(fruits);

numbers.splice(1, 2, 16, 17);

console.log(numbers);

console.log(numbers.slice(2, 5));  // creates a new Array

numbers.reverse();

console.log(numbers);

numbers.sort((a, b) => a - b);   // comperator to sort elements in ascending order

console.log(numbers);

let arr = [1, 2, 3, 4, 5];

arr.fill(6, 1, 4);

console.log(arr);

let a = new Array(4);   // to fill an empty array

a.fill(4);

console.log(a);

let array = [2, 3, 2, 4, 3, 5];

console.log(array.indexOf(2));

const user = "Sasuke";

console.log(Array.from(user));

arr = [1, 2, 3, [4, 5, 6, [7, 8]]];

console.log(arr.flat());

console.log(arr.flat(2));

Array.prototype.myFunction = function ()    // creating our own array method
{
    console.log("My Function");    
}

fruits.myFunction();