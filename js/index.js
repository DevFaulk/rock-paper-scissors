"use strict";
function displayWin(playerChoice, computerChoice) {
  return `You chose: ${playerChoice}
    Computer chose: ${computerChoice}
    Result: You win!`;
}
function displayLose(playerChoice, computerChoice) {
  return `You chose: ${playerChoice}
    Computer chose: ${computerChoice}
    Result: You lose.`;
}
function displayTie(playerChoice, computerChoice) {
  return `You chose: ${playerChoice}
    Computer chose: ${computerChoice}
    Result: Tie!`;
}

function displayGameResult(playerChoice) {
  let computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    displayTie(playerChoice, computerChoice);
  } else if (
    (playerChoice === "Rock" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Rock")
  ) {
    displayLose(playerChoice, computerChoice);
  }
}

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

console.log(getComputerChoice());
