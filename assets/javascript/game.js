// Word Guess Game (Hangman)    
    

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
var answer = possible[Math.floor(Math.random() * possible.length)];
var answerIndex = possible.indexOf(answer);
var splitAns = answer.split(""); 
var answerArray = Array(splitAns.length).fill("_");
var lives = 10; 
var guessArray = [];
var counter = 0;

// function getWord() {
//   var answer = possible[Math.floor(Math.random() * possible.length)];
//   var splitAns = answer.split(""); 
//   var answerArray = Array(splitAns.length).fill("_");
// }

// getWord();

function update() {
  document.querySelector("#lives").innerHTML = lives;
  document.querySelector("#answerArray").innerHTML = answerArray.join(' ');
};

function gameOver() {
  if (counter === splitAns.length && lives > 0) {
    document.querySelector("#lives").innerHTML = "You win!";
  }
  else if (counter === splitAns.length && lives === 0) {
    document.querySelector("#lives").innerHTML = "You win!";
  }
  else if (lives === 0) {
    document.querySelector("#lives").innerHTML = "Game over.";
    }
};
    
update();

document.onkeyup = function (event) {

  var guess = event.key;
  var noRepeat = guessArray.indexOf(guess);

  // checks if guess is a letter
  if (guess >= "a" && guess <= "z" && lives > 0 && noRepeat < 0 && counter != splitAns.length) {
    guessArray.push(guess);
    document.querySelector("#guessArray").innerHTML = guessArray.join(', ');

    // checks if guess is in the answer
    if (splitAns.indexOf(guess) > -1) {
      lives--;
      
      console.log(guess + " is a letter in " + answer);
      console.log(splitAns.indexOf(guess));

      for (var i = 0; i < splitAns.length; i++) {
        if (guess === splitAns[i]) {
          answerArray.splice(i, 1, guess);
          counter++;
          update();
          gameOver();
        }
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

document.getElementById("reset").addEventListener("mouseup", function () {
  possible.splice(answerIndex, 1);
  answer = possible[Math.floor(Math.random() * possible.length)];
  // splitAns = answer.split("");
  // answerArray = Array(splitAns.length).fill("_");
});
