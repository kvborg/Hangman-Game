
var wordList = ['mint', 'chocolate', 'vanilla', 'sherbert', 'rockyroad', 'cookiedough', 'strawberry', 'coffee', 'neapolitan', 'spumoni']; 	
var secretWord = ""; 
var lettersInSecretWord = []; 
var blankSpaces = 0; 
var secretWordWithBlanks = []; 
var wrongLettersGuessed	= []; 
var wins= 0;
var losses= 0;
var numGuesses = 10;

//Star Game
function start() {
	
  numGuesses = 10; //number of incorrect guesses allowed
  secretWord = wordList[Math.floor(Math.random() * wordList.length)]; //picks secret word at random
  lettersInSecretWord = secretWord.split(""); //split out secret word letter by letter
  blankSpaces = lettersInSecretWord.length;  //placeholder for secret word
  console.log(secretWord);
  secretWordWithBlanks = [];
  wrongLettersGuessed = [];
	
  for (var i = 0; i < blankSpaces; i++) {
    secretWordWithBlanks.push("_");
  }
  console.log(secretWordWithBlanks);
  }
	
	
function checkGuess(letter) {
  var guessInWord = false;
  for (var i = 0; i< blankSpaces; i++) {
    if (secretWord[i] === letter) {
      guessInWord = true;
    }
  }
  if (guessInWord) {
    for (var j = 0; j < blankSpaces; j++) {
      if (secretWord[j] === letter) {
        secretWordWithBlanks[j] = letter;
      }
    }    console.log(secretWordWithBlanks);
  }
  else {
    wrongLettersGuessed.push(letter);
    numGuesses--;
  }
}

function afterguess() {

  console.log("WinCount: " + wins + " | LossCount: " + losses + " | NumGuesses: " + numGuesses);
  document.getElementById("guesses-left").innerHTML = numGuesses;
  document.getElementById("word-blanks").innerHTML = secretWordWithBlanks.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongLettersGuessed.join(" ");

  if (lettersInSecretWord.toString() === secretWordWithBlanks.toString()) {
    wins++;
    alert("Correct!");
    document.getElementById("win-counter").innerHTML = wins;
    start();
  }

  else if (numGuesses === 0) {
    losses++;
    alert("Sorry, you lost");
    document.getElementById("loss-counter").innerHTML = losses;
    start();
  }
}

start();

document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkGuess(letterGuessed);
  afterguess();
};
		   
		   
			
