// Array of words that we will use for the game 
const words = ['penguins', 'elephant', 'koala', 'synonym', 'peanut',
                'english', 'ruby', 'react','friday', 'airplane', 'banana', 'birthday', 
                'waterfall', 'trampoline', 'window', 'president', 'basketball', 'hiccup', 
                'cheerleader', 'kangaroo', 'groundhog', 'soccer', 'handball', 'caterpillar',
                'shoelaces', 'hungry', 'fishing', 'monster'];

/**
 * Gets a random word from the words array declared on line 2
 * @returns a word that has been randomly selected from the words_array
 */
function getWord(wordList) {
    return (wordList[Math.floor(Math.random() * wordList.length-1)]);
}

// grab and store the body element tag
let body = document.body;

/**
 * Creates new elements of the type passed by the parameter elementType
 * Updates elements innerHTML to be text arg and sets class name 
 * @param {string} elementType 
 * @param {string} text 
 * @param {string} className 
 * @returns the created element 
 */
function generateElement(elementType, text, className) {
    let element = document.createElement(elementType);
    if(elementType==="button") {
        element.type = "button";
    }
    element.innerHTML = text;
    element.className = className;
    return element;
}

/**
 * Toggles a class to the startButton that hides the button 
 * Calls the generateGame() function to create the game
 */
function startClicked() {
    // hide the start button 
    this.classList.toggle("hideStartButton");
    generateGame();
}

/**
 * Disables buttons once they have been clicked 
 * @param {button} letterButton 
 */
function letterSelected() {
    console.log(word);
    // add additional class for styling 
    this.classList.toggle("selected");
   
    // disable the button so it can't be selected again 
    this.disabled = true;

    // store character of the letter button selected
    let char = this.innerText;
    
    // check to see if the character selected is in the word 
    if(word.includes(char)) {
        // get the letterBoxesDiv 
        let letterBoxesDiv = document.getElementsByClassName("letterBoxesDiv")[0];

        // iterate through the letterBoxesDiv to update each matching letterBox char
        for(let i = 0; i < word.length; i++) {
            let currLetterBox = letterBoxesDiv.children[i];
            if(word[i] === char) {
                updateLetterBox(currLetterBox, char);
                correctGuesses++;
                if(correctGuesses===word.length) {
                    // code to end the game
                    generateEndScreen("won");
                }
            }
        }
    } else {
        guessesLeft--;
        let guesses = document.getElementsByClassName("guesses")[0];
        guesses.innerHTML = `Number of guesses left: <span id="guessesSpan">${guessesLeft}</span>`
        if(guessesLeft === 0) {
            // code to end the game 
            generateEndScreen("lost");
        }
        console.log(guessesLeft);
    }
    // check to see if the letter selected is inside the word 
    // update guess score if not in the word 
    // update the div to show the letter in the letterBox if it is in the word 

}

function updateLetterBox(letterBox, letter) {
    letterBox.innerHTML = letter;
}

// make the title of the game 
let mainDiv = generateElement("div", "", "mainDiv");
let titleOfGameDiv = generateElement("div", "", "titleOfGameDiv");
let titleOfGame = generateElement("h1", `Guess the <span id="word">Word</span>`, "titleOfGame");
titleOfGameDiv.appendChild(titleOfGame);
mainDiv.appendChild(titleOfGameDiv);

// generate start button 
let startButtonDiv = generateElement("div", "", "startButtonDiv");
let startButton = generateElement("button", "Start Game","startButton");
startButton.setAttribute("id", "startButton");
startButton.addEventListener('click', startClicked, false);
startButtonDiv.appendChild(startButton);
mainDiv.appendChild(startButtonDiv);
body.appendChild(mainDiv);

// generate 26 buttons for each letter of the alphabet 
function generateAlphabetButtons() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let alphabetSection = generateElement("section","","alphabetSection");
    let alphabetInnerDiv1 = generateElement("div","","alphabetInnerDiv");
    let alphabetInnerDiv2 = generateElement("div","","alphabetInnerDiv");
    alphabet.forEach((char, index) => {
        let charButton = generateElement("button", char, "alphabetButton");
        charButton.addEventListener('click', letterSelected);
        index < 13 ? alphabetInnerDiv1.appendChild(charButton) : alphabetInnerDiv2.appendChild(charButton);
    });
    alphabetSection.appendChild(alphabetInnerDiv1);
    alphabetSection.appendChild(alphabetInnerDiv2);
    return alphabetSection;
}
// declare global variables for generateGame()
let word, guessesLeft, correctGuesses;

//generate the game board 
function generateGame() {
    // resets game state 
    word = getWord().toUpperCase();
    guessesLeft = 7;
    correctGuesses = 0;
    
    // grab the main div to append game board 
    let mainDiv = document.getElementsByClassName("mainDiv")[0];
    
    // create the board game section 
    let gameBoard = generateElement("section", "", "gameBoard");
    let gameBoardDiv = generateElement("div", "", "gameBoardDiv");

    // create div for the word letters boxes 
    let letterBoxesDiv = generateElement("div", "", "letterBoxesDiv");

    // generate divs depending on word.length 
    for(let i = 0; i < word.length; i++) {
        let letterBox = generateElement("div", "", "letterBox")
        letterBoxesDiv.appendChild(letterBox);
    }

    // call to generate the div with alphabet buttons 
    let alphabetButtons = generateAlphabetButtons();

    // create div to display number of guesses left 
    let guessesDiv = generateElement("div", "", "guessesDiv")
    let guesses = generateElement("h2", `Number of guesses left: <span id="guessesSpan">${guessesLeft}</span>`, "guesses");

    guessesDiv.appendChild(guesses);

    gameBoardDiv.appendChild(letterBoxesDiv);
    gameBoardDiv.appendChild(alphabetButtons);
    gameBoardDiv.appendChild(guessesDiv);
    gameBoard.appendChild(gameBoardDiv);
    mainDiv.appendChild(gameBoard);
    body.appendChild(mainDiv);
}

// generate start over button to use in the end screen(s)
let startOver = generateElement("button", "Start Over", "startOverButton");
startOver.addEventListener('click', resetScreen);
startOver.setAttribute("id", "startOverButton")

function generateEndScreen(result) {
    // remove the gameBoard 
    let gameBoard = document.getElementsByClassName("gameBoard")[0];
    let mainDiv = document.getElementsByClassName("mainDiv")[0];
    mainDiv.removeChild(gameBoard);
    
    let message = "";
    let endScreenSection = generateElement("section", "", "endScreenSection");
    let endScreenTextDiv = generateElement("div", "", "endScreenTextDiv");
    if(result === "won") {
        message = `<span id="YouWon">You win</span><br>Play again!`;
    } else { 
        message = `<span id="GameOver">You lose</span><br>Better luck next time!`;
    }
    let endScreenText = generateElement("h1", `${message}`, "endScreenText");
    endScreenTextDiv.appendChild(endScreenText);
    endScreenSection.appendChild(endScreenTextDiv);

    let startOverButtonDiv = generateElement("div", "", "startOverButtonDiv");
    startOverButtonDiv.appendChild(startOver);
    endScreenSection.appendChild(startOverButtonDiv);
    mainDiv.appendChild(endScreenSection);
}

function resetScreen() {
    let mainDiv = document.getElementsByClassName("mainDiv")[0];
    let endScreenSection = document.getElementsByClassName("endScreenSection")[0];
    mainDiv.removeChild(endScreenSection);
    generateGame();
}