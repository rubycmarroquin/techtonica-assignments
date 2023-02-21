import { useState } from "react";
import EndGameScreen from "./EndGameScreen";

function GameBoard({ wordList }) {
  /** Default states when first starting game */
  const [guessesLeft, setGuessesLeft] = useState(7);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [lettersSelected, setLettersSelected] = useState([]);
  const [word, setWord] = useState(getWord(wordList));

  /** Handles the letter divs to display or not display letter */
  const LetterBox = ({ letter, showLetter }) => (
    <div className="letterBox">{showLetter ? letter : ""}</div>
  );

  /** Handles the Buttons of each letter in the alphabet */
  const AlphabetLetter = ({ letter }) => {
    return (
      <button
        type="button"
        className="alphabetButton"
        onClick={letterSelected}
        disabled={lettersSelected.includes(letter.toLowerCase())}
      >
        {letter}
      </button>
    );
  };

  /** Resets the states */
  function resetGame() {
    setGuessesLeft(7);
    setCorrectGuesses(0);
    setLettersSelected([]);
    setWord(getWord(wordList));
  }

  /** Grabs a random word from a list */
  function getWord(wordList) {
    return wordList[Math.floor(Math.random() * wordList.length - 1)];
  }

  /** checks to see if the game is over */
  function isGameOver() {
    return guessesLeft <= 0 || correctGuesses === word.length;
  }

  /** Handles letters when they are selected */
  function letterSelected(event) {
    let char = event.target.innerText.toLowerCase();
    setLettersSelected([...lettersSelected, char]);
    const charactersFound = word
      .split("")
      .filter((currCharacter) => char === currCharacter).length;
    if (charactersFound) {
      setCorrectGuesses(correctGuesses + charactersFound);
    } else {
      setGuessesLeft(guessesLeft - 1);
    }
  }

  return (
    <section className="gameBoard">
      {!isGameOver() ? (
        <div className="gameBoardDiv">
          <div className="letterBoxesDiv">
            {word &&
              word
                .split("")
                .map((letter, index) => (
                  <LetterBox
                    key={`${letter} - ${index}`}
                    letter={letter}
                    showLetter={lettersSelected.includes(letter.toLowerCase())}
                  />
                ))}
          </div>
          <section className="alphabetSection">
            <div className="alphabetInnerDiv">
              {"ABCDEFGHIJKLM".split("").map((letter) => (
                <AlphabetLetter key={letter} letter={letter} />
              ))}
            </div>
            <div className="alphabetInnerDiv">
              {"NOPQRSTUVWXYZ".split("").map((letter) => (
                <AlphabetLetter key={letter} letter={letter} />
              ))}
            </div>
          </section>
          <div className="guessesDiv">
            <h2 className="guesses">
              Number of guesses left:{" "}
              <span id="guessesSpan">{guessesLeft}</span>
            </h2>
          </div>
        </div>
      ) : (
        <section className="endScreenSection">
          <EndGameScreen result={guessesLeft <= 0 ? "lose" : "win"} />
          <div className="startOverButtonDiv">
            <button
              type="button"
              className="startOverButton"
              onClick={resetGame}
              id="startOverButton"
            >
              Start Over
            </button>
          </div>
        </section>
      )}
    </section>
  );
}

export default GameBoard;
