"use strict";

console.log(this); // window object

const calcAge = function (birthYear) {
    console.log(2023 - birthYear);
    console.log(this); // undefined
};

calcAge(2001); 

const calcAgeArrow = birthYear => {
    console.log(2023 - birthYear);
    console.log(this); // window
};

calcAgeArrow(2001);

// Arrow function does not get it's own this keyword
// It uses it's lexical this keyword (this keyword of parent function)

const person = {
    birthYear: 2001,
    calcAge: function () {
        console.log(2023 - this.birthYear);
        console.log(this); // object that is calling the method

        const isMillenial = () => {
            // Arrow function will use this keyword of it's parent scope (calcAge() method)
            console.log(this); 
            console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
        };

        isMillenial();
    }
};

person.calcAge();

var firstName = "Matilda"; // This property will be created on the global object

const jonas = {
    firstName: "Jonas",
    greet: () => {
        console.log(this); // window
        console.log(`Hey ${this.firstName}`); // Hey Matilda
    }
}

jonas.greet(); // As we are using var, window has a property called firstName

// Best Practice: Never use an arrow function as a method

// arguments keyword
const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
};

addExpr(2, 5);
addExpr(3, 4, 6, 8);