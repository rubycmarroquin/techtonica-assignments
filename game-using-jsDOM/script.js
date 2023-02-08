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

function buttonsEventListenerAdder(button, functionToAdd) {
    
}



function startClicked() {
    // hide the start button 
    startButton.classList.toggle("hideStartButton");
    generateGame();
}

// make the title of the game 
let mainDiv = generateElements("div", "", "mainDiv");
let titleOfGameDiv = generateElements("div", "", "titleOfGameDiv");
let titleOfGame = generateElements("h1", `Guess the <span= id="title">Word<span>`, "titleOfGame");
titleOfGameDiv.appendChild(titleOfGame);
mainDiv.appendChild(titleOfGameDiv);

// generate start button 
let startButtonDiv = generateElements("div", "", "startButtonDiv");
let startButton = generateButtons("Start Game","startButton");
startButton.addEventListener('click', startClicked, false);
startButtonDiv.appendChild(startButton);
mainDiv.appendChild(startButtonDiv);
body.appendChild(mainDiv);

// generate 26 buttons for each letter of the alphabet 
function generateAlphabetButtons() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let alphabetSection = generateElements("section","","alphabetSection");
    let alphabetInnerDiv1 = generateElements("div","","alphabetInnerDiv");
    let alphabetInnerDiv2 = generateElements("div","","alphabetInnerDiv");
    alphabet.forEach((char, index) => {
        let charButton = generateButtons(char, "alphabetButton");
        index < 13 ? alphabetInnerDiv1.appendChild(charButton) : alphabetInnerDiv2.appendChild(charButton);
    });
    alphabetSection.appendChild(alphabetInnerDiv1);
    alphabetSection.appendChild(alphabetInnerDiv2);
    return alphabetSection;
}

//generate the game board 
function generateGame() {
    // create the board game section 
    let gameBoard = generateElements("section", "", "gameBoard");

    // call to generate the alphabet buttons div 
    let alphabetButtons = generateAlphabetButtons;
}
/** NEXT PORTION: CREATE EVENT LISTENERS FOR EACH BUTTON **/