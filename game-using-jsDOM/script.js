// Array of words that we will use for the game 
const words = ['javascript', 'penguins', 'elephant', 'koala', 'synonym', 'peanut',
                'english', 'ruby', 'techtonica', 'react', 'components', 'superduperfun',
                'friday'];

/**
 * Gets a random word from the given array.
 * @param {array} words_array - an array of random words 
 * @returns a word that has been randomly selected from the words_array
 */
function getWord(words_array) {
    return (words_array[Math.floor(Math.random() * words.length)]);
}

/**
 * Checks to see if the character exists in the word 
 * @param {string} char 
 * @param {string} word 
 * @returns 
 */
function checkChar(char, word) {
    if(word.includes(char)) {
        return true;
    } return false;
}

// grab and store the body element tag
let body = document.getElementsByTagName("body")[0];

function generateElements(elementType, text, className) {
    let element = document.createElement(elementType);
    element.innerHTML = text;
    element.className = className;
    return element;
}

function generateButtons(buttonName, className) {
    let button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.innerText = buttonName;
    return button;
}

// make the title of the game 
let mainDiv = generateElements("div", "", "mainDiv");
let titleOfGameDiv = generateElements("div", "", "titleOfGameDiv");
let titleOfGame = generateElements("h1", `Welcome to <span= id="title">Hangman<span>`, "titleOfGame");
titleOfGameDiv.appendChild(titleOfGame);
mainDiv.appendChild(titleOfGameDiv);
body.appendChild(mainDiv);

// generate start button 
let startButtonDiv = generateElements("div", "", "startButtonDiv");
let startButton = generateButtons("startButton", "Start Game");
startButtonDiv.appendChild(startButton);
body.appendChild(startButtonDiv);

// generate 26 buttons for each letter of the alphabet 
function generateAlphabetButtons() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let alphabetDiv = generateElements("section","","alphabetSection");
    alphabet.forEach(char => {
        let charButton = generateButtons(char, "alphabetButton");
        alphabetDiv.appendChild(charButton);
    });
    body.appendChild(alphabetDiv);
}

/** NEXT PORTION: CREATE EVENT LISTENERS FOR EACH BUTTON **/