"use strict";

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

function displayWin(playerChoice, computerChoice) {
  return `You chose: ${playerChoice}
Computer chose: ${computerChoice}
Result: You win! ${playerChoice} beats ${computerChoice}`;
}
function displayLose(playerChoice, computerChoice) {
  return `You chose: ${playerChoice}
Computer chose: ${computerChoice}
Result: You lose. ${computerChoice} beats ${playerChoice}`;
}
function displayTie(playerChoice, computerChoice) {
  return `You chose: ${playerChoice}
Computer chose: ${computerChoice}
Result: Tie! You both selected ${playerChoice}`;
}

function caseCheck(playerChoice) {
  return playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
}

function displayGameResult(playerChoice) {
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
  }
  else {
    return displayGameResult(prompt("Make another selection"))
  }
}

alert(displayGameResult(prompt("What's your choice?")))
