// Value of this keyword depends upon strict/non-strict mode in javascript

// In strict mode your value becomes undefined 

// In non-strict mode your value becomes global object

"use strict"

console.log(this);    // global object

function abc()
{
    console.log(this);    // global object
}

abc();

window.abc();   // depends on how your function is called

// Value of this in a function present inside an object points to that object only

const userDetails = 
{
    firstName: "Naruto",
    lastName: "Uzumaki",
    
    printName: function()   // this -> points to the current object
    {
        console.log(this.firstName + " " + this.lastName);
    },

    printDetails: () =>    // this -> global object (Lexical Environment)
    {
        console.log(this);
    }
}

userDetails.printDetails();