// Seting Our global variable

//Select Letters Container
let lettersContainer = document.querySelector(".letters");
let lettersContainerSpans;

// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");
let lettersAndSpace = 0;

// Define The Buttons
const easyButton = document.querySelector(".buttons .easy");
const mediumButton = document.querySelector(".buttons .medium");
const hardButton = document.querySelector(".buttons .hard");

// Set Wrong Attempts
let wrongAttempts;

// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");

// Selecting the container and row elements
const container = document.querySelector(".container");
const row = document.querySelector(".row");
const lightDarkModeIcon = document.querySelector(".game-info .icon img");

// Identify Random
let randomGameValue;
let getIt = false;

let theCorrectGuesses = 0;
// Selecting The Statue Popup
const statuePopup = document.querySelector(".state-popup");

// Identify The Guess Span
let choosenWordSpans;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Making The Letters boxes
const letters = "abcdefghijklmnopqrstuvwxyz.-";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Generate Letters
lettersArray.forEach((letter) => {
  // Create Span
  let span = document.createElement("span");

  // Create Letter Text Node
  let theLetter = document.createTextNode(letter);

  // Append The Letter To Span
  span.appendChild(theLetter);

  //Add Class On Span
  span.className = "letter-box";

  // Append Span To The Letters Container
  lettersContainer.appendChild(span);
});
lettersContainerSpans = document.querySelectorAll("span");

// Fetching Words json and Setting Guess Letters Box
const slectingWord = async function (difficulty) {
  const response = await fetch("./words.json");
  const data = await response.json();
  const words = data[`${difficulty}`];

  let allKeys = Object.keys(words);

  // Random Number from keys length
  let randomPropNumber = Math.floor(Math.random() * allKeys.length);

  // Get Category from keys object
  let randomPropName = allKeys[randomPropNumber];

  // Specify the Category from words object
  let randomPropValue = words[randomPropName];

  // Random Number from words length
  let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

  // Choosing the topic from the category
  randomGameValue = randomPropValue[randomValueNumber];

  // Set Category Info
  document.querySelector(".game-info .category span").innerHTML =
    randomPropName;

  // Convert Chosen Word To Array
  lettersAndSpace = Array.from(randomGameValue);

  // Create Spans Depend On Word
  lettersAndSpace.forEach((letter) => {
    // Create Empty Span
    let emptySpan = document.createElement("span");

    // If Letter Is Space
    if (letter === " ") {
      // Add Class To The Span
      emptySpan.className = "with-space";
      theCorrectGuesses++;
    }

    // Append Span To The Letters Guess Container
    lettersGuessContainer.appendChild(emptySpan);
  });
  choosenWordSpans = lettersGuessContainer.querySelectorAll("span");
};

// Handle Clicking On Letters
document.addEventListener("click", (e) => {
  // Set The Chose Status
  let theStatus = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    // Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();
    let theChosenWord = Array.from(randomGameValue.toLowerCase());

    theChosenWord.forEach((wordLetter, wordIndex) => {
      // If The Clicked Letter presents in the random word
      if (theClickedLetter == wordLetter) {
        // Set Staus To Correct
        theStatus = true;

        // Show The Letter in its place
        choosenWordSpans[wordIndex].innerHTML = theClickedLetter;

        theCorrectGuesses++;
      }
    });

    // If Letter Is Wrong
    if (theStatus !== true) {
      // Increase The Wrong Attempts
      wrongAttempts++;

      // Add Class Wrong On The Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      // Set The incorrect color for the box
      e.target.classList.add("incorrect-letter");

      document.getElementById("fail").play();

      if (wrongAttempts == 8) {
        endGame("loser");

        lettersContainer.classList.add("finished");
      }
    } else {
      // Set The correct color for the box
      document.getElementById("success").play();
      e.target.classList.add("correct-letter");
      if (theCorrectGuesses == lettersAndSpace.length) {
        lettersContainer.classList.add("finished");
        endGame("winner");
      }
    }
  }
});

// Changing The Sections Arrangement for better using in small devices
const rearrangingSections = function () {
  if (window.innerWidth <= 750) {
    // Make The Letter Guess Container in The Row Container and Before The Letters

    row.insertBefore(lettersGuessContainer, lettersContainer);
  } else {
    // Restore original order
    row.appendChild(lettersContainer);
    container.appendChild(lettersGuessContainer);
  }
};
rearrangingSections();

window.addEventListener("resize", rearrangingSections);

const startGame = function (difficulty) {
  // Set Attempts To Zero
  wrongAttempts = 0;
  theCorrectGuesses = 0;

  // Set The Letters buttons to default conditions
  lettersContainerSpans.forEach((span) => {
    span.classList.remove("incorrect-letter");
    span.classList.remove("correct-letter");
    span.classList.remove("clicked");
  });

  lettersContainer.classList.remove("finished");

  // Empty The Guess Container
  lettersGuessContainer.innerHTML = "";
  slectingWord(difficulty);
  theDraw.className = "hangman-draw";

  statuePopup.style.display = "none";
};
// End the game function
const endGame = function (finalStatue) {
  const editablePart = statuePopup.querySelector(".editable");
  let finalMessage;
  if (finalStatue == "winner") {
    finalMessage = "Congrates You Are A Great Player";
  } else if (finalStatue == "loser") {
    finalMessage = "Seems Like Your Intelegence didn't Help You This Time";
  }
  editablePart.innerHTML = `${finalMessage}`;
  statuePopup.style.display = "block";
};

easyButton.addEventListener("click", startGame.bind(undefined, "easy"));
mediumButton.addEventListener("click", startGame.bind(undefined, "medium"));
hardButton.addEventListener("click", startGame.bind(undefined, "hard"));

// Initialize lightMode from localStorage
let lightMode = localStorage.getItem("lightMode") === "true";

// Function to toggle light and dark mode
const setLightDark = function () {
  if (lightMode) {
    lightDarkModeIcon.src = "./Images/sun.png";
    document.body.classList.add("light-theme");
  } else {
    lightDarkModeIcon.src = "./Images/moon.png";
    document.body.classList.remove("light-theme");
  }
};

// Event listener for light/dark mode toggle
lightDarkModeIcon.addEventListener("click", () => {
  lightMode = !lightMode;
  localStorage.setItem("lightMode", lightMode);
  setLightDark();
});

// Initial call to set the correct mode on page load
setLightDark();
