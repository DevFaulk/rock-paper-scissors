// * DOM Declarations
let gameBox = document.getElementById("gameBox");
let gameHeader = document.getElementById("gameHeader");
let gameBody = document.getElementById("gameBody");

// ? FUNCTIONALITY:

window.onload = createStartGameScene;

function clearGameWindow(type) {
  if (type == "header") {
    document.querySelector(".game-header").innerHTML = "";
  } else if (type == "body") {
    document.querySelector(".game-body").innerHTML = "";
  } else if (type == "start") {
    const mainHTML = document.querySelector("main");
    const startDiv = document.getElementById("startGameScene");
    mainHTML.removeChild(startDiv);
  }
}

let startGameButton = document.querySelector(".start-game-button");
function beginGame() {
  clearGameWindow("start");
  startGameplayLoop();
}

function createHeaderCounters() {
  let roundCounter = document.createElement("h4");
  let winCounter = document.createElement("h4");
  let loseCounter = document.createElement("h4");
  let tieCounter = document.createElement("h4");
  roundCounter.id = "roundCounter";
  winCounter.id = "winCounter";
  loseCounter.id = "loseCounter";
  tieCounter.id = "tieCounter";
  roundCounter.textContent = "Round 1/5";
  winCounter.textContent = "Wins: 0";
  loseCounter.textContent = "Losses: 0";
  tieCounter.textContent = "Ties: 0";
  gameHeader.appendChild(roundCounter);
  gameHeader.appendChild(winCounter);
  gameHeader.appendChild(loseCounter);
  gameHeader.appendChild(tieCounter);
}

function showGameElements() {
  gameBox.style.display = "flex";
  gameHeader.style.display = "flex";
  gameBody.style.display = "flex";
}

function hideGameElements() {
  gameBox.style.display = "none";
  gameHeader.style.display = "none";
  gameBody.style.display = "none";
}

// restart game button clicked = anonymous function () {

// 	clearGameWindow function
// 	run Gameplay Loop Scenes function

// }

// end game button clicked = reload window

// ? LOGIC:
// function calculateComputerChoice {
// 	calculate random choice
// 	return ranom choice
// }

// function calculateRoundDecision {
// 	compare player to computer
// 	send decision to game header ui update function
// 	return decision
// }

// function updateGameHeaderUI {
// 	update round count out of max rounds (ex: 2/5)
// 	update player's wins
// 	update player's losses
// 	update player's ties
// }

// function calculateGameResult {
// 	calculate players wins vs losses vs ties
// 	return game result
// }

// ? GAME SETTINGS
let maxRounds = 5;

// ? GAMEPLAY:

// * START GAME SCENE

function createStartGameScene() {
  const mainHTML = document.querySelector("main");
  const startGameScene = document.createElement("div");
  const sgHeader = document.createElement("h2");
  const sgButton = document.createElement("button");
  startGameScene.className = "start-game-scene";
  startGameScene.id = "startGameScene";
  sgHeader.className = "start-game-header";
  sgHeader.textContent = `Press "Start Game" to play!`;
  sgButton.className = "start-game-button button";
  sgButton.textContent = `Start Game`;
  sgButton.setAttribute("onclick", "beginGame()");
  mainHTML.appendChild(startGameScene);
  startGameScene.appendChild(sgHeader);
  startGameScene.appendChild(sgButton);
}
// * PLAYER SELECT SCENE
// * BATTLE AND RESULT SCENE
// * ROUND TRANSITION SCENE
// * RESULT SCENE

function startGameplayLoop() {
  showGameElements();
  createHeaderCounters();
}

// function Gameplay Loop Scenes {
// 	display gameplay header

// 	Loop for as many max rounds selected {

// 		function Player Select Scene:
// 			load player choices that take response
// 			wait for response
// 			save player response
// 			clear game ui

// 		function Battle and Result Scene:
// 			load player choice
// 			load computer choice
// 			load battle ui
// 			calculate result of battle
// 			display result of battle
// 			clear game ui

// 		if(game not ended){

// 			function Round Transition Scene:
// 				display next round with number (ex: Round 2...)
// 				continue loop
// 		}
// 		else if(game over){
// 			Run End Game Scene Function()
// 		}
// 	}
// }

// function End Game Scene {
// 	clearGameWindow(header)
// 	display game header as main content under alias final game score
// 	run calculate decision function ()
// 	display that game decision as main content, bigger than game score
// 	create restart game button
// 	create end game button
// }
