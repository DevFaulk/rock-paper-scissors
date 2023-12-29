// FUNCTIONALITY:
// on load of window = start game scene function that loads UI Elements

// start game button clicked = anonymous function () {

// 	clearGameWindow function
	
// 	run Gameplay Loop Scenes function
	
// }

// restart game button clicked = anonymous function () {

// 	clearGameWindow function
// 	run Gameplay Loop Scenes function
	
// }

// end game button clicked = reload window

// function clearGameWindow(type) {
// 	if(type == header){
// 		gameboxHeader.innerHTML = nothing
// 	}
// 	else if(type == body){
// 		gamebox.innerHTML = nothing
// 	}
// }

// LOGIC:
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

// GAME:
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