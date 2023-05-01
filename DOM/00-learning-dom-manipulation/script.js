// Adding Elements
const body = document.body;
body.append("Hello World");

const div = document.createElement("div");
div.innerText = "I am inside a div.";
body.append(div);

const strong = document.createElement("strong");
strong.innerText = " I am strong.";
div.append(strong);

// Removing Elements
const spanHi = document.querySelector(".Hi");
spanHi.remove();
