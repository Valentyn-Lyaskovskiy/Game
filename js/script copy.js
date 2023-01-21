"use strict";

const modalWindow = document.querySelector(".class-modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const modalBtns = document.querySelectorAll(".modal");
console.log(modalBtns);

const openModal = function () {
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < modalBtns.length; i++) {
  modalBtns[i].addEventListener("click", openModal);
}

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalWindow.classList.contains("hidden")) {
    closeModal();
  }
});
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".main__play").addEventListener("click", function () {
  const guess = Number(document.querySelector(".main__input").value);
  if (!guess) {
    document.querySelector(".main__title").textContent = `Enter number!😊`;
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector(
        ".main__highscore"
      ).textContent = `🎲 Highscore: ${highScore}`;
    }
    document.querySelector("body").style.backgroundColor = "#14a800";
    document.querySelector(".header__question-mark").style.color = "#14a800";
    document.querySelector(".header__question-mark").style.fontSize = "44px";
    document.querySelector(".header__btn").style.color = "#14a800";
    document.querySelector(".main__input").style.color = "#14a800";
    document.querySelector(".main__play").style.color = "#14a800";
    document.querySelector(".header__btn").style.backgroundColor = "#fff";
    document.querySelector(".main__play").style.backgroundColor = "#fff";
    document.querySelector(".main__input").style.backgroundColor = "#fff";
    document.querySelector(".main__title").textContent = "👍 Correct Number!";
    document.querySelector(".header__question-mark").textContent = secretNumber;
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

  const again = document.querySelector(".header__btn");
  again.addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#000080";
    document.querySelector(".header__btn").style.color = "#fff";
    document.querySelector(".header__btn").style.backgroundColor = "#000080";
    document.querySelector(".header__question-mark").style.backgroundColor =
      "#fff";
    document.querySelector(".header__question-mark").style.color = "#000080";
    document.querySelector(".main__play").style.color = "#000080";
    document.querySelector(".main__play").style.backgroundColor = "#fff";
    document.querySelector("body").style.color = "#fff";
    document.querySelector(".main__title").textContent = "Start guessing...";
    document.querySelector(".header__question-mark").textContent = "?";
    document.querySelector(".main__input").value = "";
    document.querySelector(".main__input").style.backgroundColor = "#000080";
    document.querySelector(".main__input").style.color = "#fff";
    score = 20;
    document.querySelector(".main__text").textContent = `✨ Score: ${score}`;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  });
  console.log(again);
  console.log(guess, typeof guess);
});*/
// document.querySelector(".main__input").value = 8;
