"use strict";
//Selecting elments
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const curent0El = document.querySelector("#current--0");
const curent1El = document.getElementById("current--1");
const newgameEl = document.querySelector(".newgame");
const diceEl = document.querySelector(".dice");
const rollDiceEl = document.querySelector(".rolldice");
const holdEl = document.querySelector(".hold");
//Starting conditions
diceEl.classList.add("hidden");
score0El.textContent = 0;
score1El.textContent = 0;

const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("active");
  player1El.classList.toggle("active");
};
// rolling dice
rollDiceEl.addEventListener("click", function () {
  if (playing) {
    // 1.generating a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2.Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // 3.Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

holdEl.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + current Score
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      //finish the game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("active");
    } else {
      //switch to next player

      switchPlayer();
    }
  }
});
newgameEl.addEventListener("click", function () {
  playing = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  player0El.classList.add("active");
  if (currentScore > 0) {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 0) {
      scores[i] = 0;
      document.getElementById(`score--${i}`).textContent = scores[i];
    }
  }
});
