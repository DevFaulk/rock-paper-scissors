"use strict";
// Global Declarations
let displayWinner = document.getElementById("displayWinner");
let playerScore = document.getElementById("playerScore");
let startGame = document.getElementById("startGame");
let restartGame = document.getElementById("restartGame");
//
// Default Declarations
let winCount = 0;
let loseCount = 0;
let tieCount = 0;
let roundCount = 0;
let turnCount = 0;
let gameStateFinished = false;
//
// Player Settings
let maxRounds = 5;
//
// Game Logic Functions
function calculateGameResult(playerChoice) {
  let computerChoice = getComputerChoice();
  playerChoice = caseCheck(playerChoice);
  if (playerChoice === computerChoice) {
    return displayTie(playerChoice, computerChoice);
  } else if (
    (playerChoice === "Rock" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Rock")
  ) {
    return displayLose(playerChoice, computerChoice);
  } else if (
    (computerChoice === "Rock" && playerChoice === "Paper") ||
    (computerChoice === "Paper" && playerChoice === "Scissors") ||
    (computerChoice === "Scissors" && playerChoice === "Rock")
  ) {
    return displayWin(playerChoice, computerChoice);
  } else {
    return calculateGameResult(prompt("Make another selection"));
  }
}
//
// Game GUI Functions
function displayWin(playerChoice, computerChoice) {
  winCount++;
  displayWinner.innerText = "You Won!";
  return `You chose: ${playerChoice}
Computer chose: ${computerChoice}
Result: You win! ${playerChoice} beats ${computerChoice}`;
}
function displayLose(playerChoice, computerChoice) {
  loseCount++;
  displayWinner.innerText = "You Lose, computer wins!";
  return `You chose: ${playerChoice}
Computer chose: ${computerChoice}
Result: You lose. ${computerChoice} beats ${playerChoice}`;
}
function displayTie(playerChoice, computerChoice) {
  tieCount++;
  displayWinner.innerHTML = "Game tied, nobody wins!";
  return `You chose: ${playerChoice}
Computer chose: ${computerChoice}
Result: Tie! You both selected ${playerChoice}`;
}
//
// Computer Functions
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 10);
  if (randomChoice < 3) {
    return "Rock";
  } else if (randomChoice >= 3 && randomChoice <= 6) {
    return "Paper";
  } else if (randomChoice > 6) {
    return "Scissors";
  }
}

startGame.onclick = function game() {
  for (let i = 0; i <= maxRounds; ++i) {
    roundDisplay.innerText = `Round: ${i + 1}`

`Wins: ${winCount}
Losses: ${loseCount}
Ties: ${tieCount}`
      
    ;
  }
  gameStateFinished = true;
  if (
    winCount === loseCount ||
    (winCount === loseCount && tieCount > loseCount)
  ) {
    displayWinner.innerText = "Game Tied!";
    playerScore.innerText = `
Wins: ${winCount}
Losses: ${loseCount}
Ties: ${tieCount}`;
  } else if (winCount < loseCount) {
    displayWinner.innerText = "Game lost! Computer Won!";
    playerScore.innerText = `
Wins: ${winCount}
Losses: ${loseCount}
Ties: ${tieCount}`;
  } else if (winCount > loseCount) {
    displayWinner.innerText = "You won! You beat the computer!";
    playerScore.innerText = `
Wins: ${winCount}d
Losses: ${loseCount}
Ties: ${tieCount}`;
  }
  if (gameStateFinished == true) {
    startGame.style.display = "none";
    restartGame.style.display = "inline";
  } else if (gameStateFinished == false) {
    startGame.style.display = "inline";
    restartGame.style.display = "none";
  }
};

restartGame.onclick = function () {
  window.location.reload();
};
