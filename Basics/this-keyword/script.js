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
    }
};

person.calcAge();