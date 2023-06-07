"use strict";

// Primitive Type
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";

console.log(lastName, oldLastName);

// Reference Type
const person = {
    firstName: "Jessica",
    lastName: "Williams"
};

const marriedPerson = person;
marriedPerson.lastName = "Davis";

console.log("Before marriage", person);
console.log("After marriage", marriedPerson);

// Copying objects
person.lastName = "Williams";

const personCopy = Object.assign({}, person); 
personCopy.lastName = "Davis"

console.log("Before marriage", person);
console.log("After marriage", personCopy);

// Object.assign() only create a shallow copy not a deep clone
// Shallow copy only copies at the first level

const personDetails = {
    firstName: "Jessica",
    lastName: "Williams",
    family: ["Alice", "Bob"],
}

const personDetailsCopy = Object.assign({}, personDetails);
personDetailsCopy.family.push('Mary');
personDetailsCopy.family.push('John');

console.log("Before marriage", personDetails); // family has 4 members
console.log("After marriage", personDetailsCopy);

