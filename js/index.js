"use strict";

function displayGameResult(playerChoice) {
  let computerChoice = getComputerChoice();
  if (playerChoice == "Rock" && computerChoice == "Rock") {
    console.log(`
        You chose: ${playerChoice}
        Computer chose: ${computerChoice}`);
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
