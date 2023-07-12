"use strict";

// Array Destructuring (Unpacking)
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

const restaurant = {
    name: "Classico Italinao",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

// Skip a value
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Swap values
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, main);

// Nested array
const nested = [2, 4, [5, 6]];

const [i, , j] = nested;
console.log(i, j);

const [, , [k, l]] = nested;
console.log(k, l);