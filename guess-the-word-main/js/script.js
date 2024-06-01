const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letter = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const guessCount = document.querySelector(".guess-count");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");
const word = "Simon";

//Add Placeholders for Each Letter
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        placeholderLetters.push("●");
    }
    wordProgress.innerText = placeholderLetters.join("");
  };
  
  placeholder(word);