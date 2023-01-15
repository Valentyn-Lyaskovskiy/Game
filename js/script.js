"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".header__question-mark").textContent = secretNumber;
let score = 20;

document.querySelector(".main__play").addEventListener("click", function () {
  const guess = Number(document.querySelector(".main__input").value);
  if (!guess) {
    document.querySelector(".main__title").textContent = `Enter number!😊`;
  } else if (guess === secretNumber) {
    document.querySelector(".main__title").textContent = "👍 Correct Number!";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".main__title").textContent = "📈 Too high! 😐";
      score--;
      document.querySelector(
        ".main__text"
      ).textContent = `✨ Score: ${score} 😐`;
    } else {
      document.querySelector(".main__title").textContent =
        "You lost the game! 😕";
      document.querySelector(".main__text").textContent = " 0 😐";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".main__title").textContent = "📉 Too low! 😐";
      score--;
      document.querySelector(
        ".main__text"
      ).textContent = `✨ Score: ${score} 😐`;
    } else {
      document.querySelector(".main__title").textContent =
        "You lost the game! 😕";
      document.querySelector(".main__text").textContent = " 0 😐";
    }
  }

  console.log(document.querySelector(".main__input").value);
  console.log(guess, typeof guess);
});
// document.querySelector(".main__input").value = 8;
