var gameLog = {

myNumber : Math.floor(Math.random()*10),
timesWon : 0,
timesGuessed : 5,
timesLost : 0,
userGuessTally : [],

}

document.onkeyup = function(event) {

	var userGuess = event.key;


	if (userGuess == gameLog.myNumber) {
		gameLog.timesWon++;
		gameLog.timesGuessed = 7;
		alert("You guessed correct.")
	}

	else {
		gameLog.timesGuessed--;
		gameLog.userGuessTally.push(" "+userGuess);
	}

	if (gameLog.timesGuessed == 0) {
		gameLog.timesLost++;
		gameLog.timesGuessed = 5;
		gameLog.userGuessTally = [];
		alert("You lost.");
	}


	document.getElementById("wins").innerHTML = gameLog.timesWon;
	document.getElementById("losses").innerHTML = gameLog.timesLost;
	document.getElementById("guesses").innerHTML = gameLog.timesGuessed;
	document.getElementById("sofar").innerHTML = gameLog.userGuessTally;

	// if (event.key === theGame.myNumber)
	// {
	// 	return addOneWin();
	// 	console.log(theGame.timesWon);
	// }

	// theGame.compare(event.key, theGame.myNumber);
	// console.log(theGame.timesGuessed);
	// console.log(theGame.userGuess);
	// console.log(theGame.myNumber);

	// if (userGuess === theGame.myNumber) {
	// 	   theGame.addOneWin();
	// 	   console.log(theGame.timesWon);}
	// 		   theGame.resetGuesses();
	// 		   console.log("I knew you were! Are you incepting me right now? Is this all a dream??? You have won" + theGame.timesWon + "times!");
	// 			}

	// 	else { theGame.addGuess();
	// 			console.log("This is the times guessed" + theGame.timesGuessed);
	// 			console.log("This is my random number" + theGame.myNumber);
	// 			console.log("This is the user's guess" + userGuess);
	// 			console.log("This is the times won" + theGame.timesWon);
	// 		}

	// document.getElementById("wins").innerHTML = theGame.timesWon;
	// document.getElementById("losses").innerHTML = theGame.timesLost;
	// document.getElementById("guesses").innerHTML = theGame.timesGuessed;
	// document.getElementById("sofar").innerHTML = theGame.userGuess;
		}

		// if (theGame.timesGuessed>9) {
		// 		theGame.timesGuessed === 0;
		// 		theGame.timesLost++;
		// 		console.log(theGame.timesLost);
		
		
	


	



		

	
	

		
