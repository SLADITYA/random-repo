// An object is a collection of properties and methods.

const userDetails = 
{
    firstName: "Naruto",
    lastName: "Uzumaki",
    
    printName: function(age, hobby)   // this -> points to the current object
    {
        console.log(this.firstName + " " + this.lastName);
        
        console.log(`He is ${age}`);    // template literals (ES6 Feature)
        console.log(`His hobby is ${hobby}`);
    }
}

userDetails.printName(19, "cooking");

const user = 
{
    firstName: "Sasuke",
    lastName: "Uchiha"
}

console.log(user.__proto__);    // gives the prototype of my object  // Object.prototype

user.__proto__ = userDetails;   // Not recommended

// function borrowing

userDetails.printName.apply(user, [19, "reading"]);

userDetails.printName.call(user, 19, "reading");

const reference = userDetails.printName.bind(user);
reference(19, "reading");

// Every Object in JS has a prototype