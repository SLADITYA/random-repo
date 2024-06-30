// String - A string is a collection of characters. A string is immutable 

let firstName = "  Aditya   ";

console.log(firstName.length);

console.log(firstName.toUpperCase());   // Returns a new string

console.log(firstName.toLowerCase());

// If the end index is not specified it returns the entire string starting from the given index

console.log(firstName.slice(2, -1));   // [start, end)

console.log(firstName.replace("Adi", "Pqrs"));  // Returns a new string

console.log(firstName.trim().length);  // Returns a new string