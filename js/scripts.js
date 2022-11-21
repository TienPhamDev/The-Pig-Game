"use strict";
//Selecting elments
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const curent0El = document.querySelector("#current--0");
const curent1El = document.getElementById("current--1");
const newgameEl = document.getElementsByClassName("newgame");
const diceEl = document.querySelector(".dice");
const rollDiceEl = document.querySelector(".rolldice");
const holdEl = document.querySelector(".hold");
//Starting conditions
diceEl.classList.add("hidden");
score0El.textContent = 0;
score1El.textContent = 0;

let activePlayer = 0;
let currentScore = 0;
let totalScore = 0;
// rolling dice
rollDiceEl.addEventListener("click", function () {
  // 1.generating a random dice roll
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2.Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // 3.Check for rolled 1
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("actice");
    player1El.classList.toggle("active");
  }
});

holdEl.addEventListener("click", function () {
  totalScore = currentScore;
  document.querySelector(".totalScore").textContent = totalScore;
  if (totalScore >= 100) {
    console.log("Player win");
  }
});
