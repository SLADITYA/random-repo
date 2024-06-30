// Higher Order Functions - Functions which take another function as a parameter

// Callback Function - Function which is passed as a parameter

const arr = [3, 5, -6, 7, 8, -9];

// forEach method

arr.forEach((val) => {
    console.log(val);
});

// map method

// doesnot modify the orginal array and returns a new array

// transforms the content of the array

const squaredArray = arr.map(val => val * val);

console.log(squaredArray);

// filter method

// filter elements from an array based on certain condition

// creates a new array

const evenNumbers = arr.filter(val => val % 2 == 0);

console.log(evenNumbers);

// reduce method

// reduce an array to a single value

const result = arr.reduce((acc, cur) => {
    return acc + cur;
}, 0);

console.log(result);

// Print the first name of users whose age is greater than 30

const users = [
    {
        firstName: "Mary", lastName: "Singh", age: 25
    },
    {
        firstName: "John", lastName: "Sena", age: 78
    },
    {
        firstName: "Amir", lastName: "Khan", age: 45
    },
    {
        firstName: "Arav", lastName: "Dinde", age: 32
    },
]

// const filteredUsers = users.filter(users => users.age > 30);

// const fNames = filteredUsers.map(users => users.firstName);

const fNames = users                    // chaining
    .filter(users => users.age > 30)
    .map(users => users.firstName);

console.log(fNames);

// every - checks whether every element of the array satisfies the given condition

console.log(arr.every(num => num > 0));

// some - checks whether atleast one element of the array satisfies the given condition

console.log(arr.some(num => num > 0));

// find - returns the first element of the array which satisfies the given condition

console.log(arr.find(val => val < 0));

// findIndex - returns the index of the first element of the array which satisfies the condition

console.log(arr.findIndex(val => val < 0));