const guessedLetterElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letter = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const guessCount = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");
const word = "Simon";
const guessedLetters = [];

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
    message.innerText = "";
    const guess = letter.value;
    const goodGuess = checkInput(guess);
    if (goodGuess) {
        makeGuess(guess);
    }
    letter.value = "";
  });

  //Check Player's Input
  const checkInput = function (input) {
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

    //Capture Input
const makeGuess = function (guess) {
    guess = guess.toUppeCcase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You have already guessed this letter. Try again!";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
   
};