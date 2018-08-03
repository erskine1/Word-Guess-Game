// Word Guess Game (Hangman)    
    
var score;
var possible = [
  "joked",
  "foxes",
  "zapped",
  "parallax",
  "equinox",
  "jaywalking",
  "overjoyed",
  "mummified",
  "beekeeper",
  "earthquake",
  "rogue",
  "paladin",
  "necromancer",
  "warrior",
  "shaman",
  "ranger",
  "cleric",
  "druid",
  "monk",
  "enchanter",
  "virtuoso",
  "warlock",
  "warlord",
  "assassin",
  "trickster",
  "marauder",
  "chieftan",
  "purloined",
  "ouroboros",
  "curiosity"
];
// var answer = possible[Math.floor(Math.random() * possible.length)];
var answer = "ouroboros";
var splitAns = answer.split(""); 
var answerArray = Array(splitAns.length).fill("_");
var lives = 10; 
var guessArray = []; // Needs to be defined from the start. Can set this under a play/reset function later.
var counter = 0;

function update() {
  document.querySelector("#lives").innerHTML = lives;
  document.querySelector("#answerArray").innerHTML = answerArray.join(' ');
};

function gameOver() {
  if (lives === 0) {
  document.querySelector("#lives").innerHTML = "Game over.";
  }
  else if (counter = splitAns.length) {
    document.querySelector("#lives").innerHTML = "You win!";
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

      // function eachIndex(arr, index) {
      //   var 
      // }

      // index of answer
      // var index = splitAns.indexOf(guess);
      // var lastIndex = splitAns.lastIndexOf(guess);

      for (var i = 0; i < splitAns.length; i++) {
        if (guess === splitAns[i]) {
          answerArray.splice(i, 1, guess);
          update();
        }
      }

      // backing this up
      // for (var  i = 0; i < answerArray.length; i++) {
      //   answerArray.splice(index, 1, guess);
      //   answerArray.splice(lastIndex, 1, guess);
      //   update();
      //   counter++;
      // }

    
    }
    else {
      lives--;
      update();
      gameOver();
      console.log(guess + " is not a letter in " + answer);
    }
  }

};