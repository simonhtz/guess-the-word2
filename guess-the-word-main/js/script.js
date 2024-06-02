const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letter = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const guessCount = document.querySelector(".remaining span");
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

  //Add Event Listener for the Button
  guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    const inputValue = e.target.value;
    console.log(inputValue);
    letter.value = "";
  });

  //Check Player's Input
  function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
     } else if (input.length > 1) {
            message.innerText = "Please enter only one letter.";
        } else if (!input.match(acceptedLetter)) {
            message.innerText = "Please enter a letter from A to Z.";
        } else {
            return input;
        }
    };