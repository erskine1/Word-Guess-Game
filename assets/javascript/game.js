// Word Guess Game (Hangman)    
    
var score;
var possible = [
  "placeholder",
  "random",
  "words",
  "because",
  "thinking",
  "difficult"
];
var answer = possible[Math.floor(Math.random() * possible.length)];
var splitAns = answer.split(""); 
var answerArray = Array(splitAns.length).fill("_");
var lives = 10; 
var guessArray = []; // Needs to be defined from the start. Can set this under a play/reset function later.

function update() {
  document.querySelector("#lives").innerHTML = lives;
  document.querySelector("#answerArray").innerHTML = answerArray.join(' ');
};

function gameOver() {
  if (lives === 0) {
  document.querySelector("#lives").innerHTML = "Game over.";
  }
};
    
update();

document.onkeyup = function (event) {

  var guess = event.key;
   var noRepeat = guessArray.indexOf(guess);

  // checks if guess is a letter
  if (guess >= "a" && guess <= "z" && lives > 0 && noRepeat < 0) {
    guessArray.push(guess);
    document.querySelector("#guessArray").innerHTML = guessArray.join(', ');

    // checks if guess is in the answer
    if (splitAns.indexOf(guess) > -1) {
      lives--;
      
      console.log(guess + " is a letter in " + answer);
      console.log(splitAns.indexOf(guess));

      var index = splitAns.indexOf(guess); // gives index of answer
      var lastIndex = splitAns.lastIndexOf(guess);

      for (var  i = 0; i < answerArray.length; i++) {
        answerArray.splice(index, 1, guess);
        answerArray.splice(lastIndex, 1, guess);
        update();
      }

    }
    else {
      lives--;
      update();
      gameOver();
      console.log(guess + " is not a letter in " + answer);
    }
  }

};