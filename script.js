"use strict";

//Players Score
const playerScoreOne = document.querySelector("#score-0");
const playerScoreTwo = document.querySelector("#score-1");
const dice = document.querySelector(".dice");
const newGame = document.querySelector(".btn-new");
const rollDice = document.querySelector(".btn-roll");
const holdGame = document.querySelector(".btn-hold");
const current0 = document.getElementById("current-0");
const current1 = document.getElementById("current-1");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");

let totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//setting-up game data
playerScoreOne.textContent = 0;
playerScoreTwo.textContent = 0;
dice.classList.add("hidden");

const playerSwitch = () => {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle("player-active");
  player1.classList.toggle("player-active");
};

//setting up Dice to roll
rollDice.addEventListener("click", () => {
  if (playing) {
    const randomDice = Math.floor(Math.random() * 6) + 1;

    dice.classList.remove("hidden");
    dice.src = `dice-${randomDice}.png`;

    if (randomDice !== 1) {
      currentScore += randomDice;
      document.getElementById(`current-${activePlayer}`).textContent =
        currentScore;
    } else {
      playerSwitch();
    }
  }
});

//Hold score
holdGame.addEventListener("click", () => {
  if (playing) {
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent =
      totalScores[activePlayer];

    if (totalScores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");

      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
    } else {
      playerSwitch();
    }
  }
});

newGame.addEventListener("click", () => {
  totalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  playerScoreOne.textContent = 0;
  playerScoreTwo.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  dice.classList.add("hidden");
  player0.classList.remove("player-winner");
  player1.classList.remove("player-winner");
  player0.classList.add("player-active");
  player1.classList.remove("player-active");
});
