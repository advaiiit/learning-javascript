"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", () => {
  const guessedNumber = Number(document.querySelector(".guess").value);

  if (!guessedNumber) {
    displayMesage("⛔ No number!");
  } else if (guessedNumber === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guessedNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessedNumber > secretNumber ? "📈 Too High!" : "📉 Too Low!"
      );
      score--;
      displayScore(score);
    } else {
      displayMessage("💀 You loose!");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  displayScore(20);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
