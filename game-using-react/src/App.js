import {useState} from 'react';
import Title from './components/Title';
import GameBoard from './components/GameBoard';
import './App.css';

function App() {

  /* Handles the startButton being clicked and hidden */
  const [startButtonClicked, setStarted] = useState(false);
  /* Declare states for the GameBoard */
  const [word, setWord] = useState(getWord(words));

  const startClicked = () => {
    // hide the start button 
    setStarted(true);
  }

  return (
    <div className="mainDiv">
      <Title />
      {
        !startButtonClicked ? (      
        <div className="startButtonDiv">
          <button type="button" className={`startButton ${!startButtonClicked ? "" : "hideStartButton"}`} id="startButton" onClick={startClicked}>
            Start Game
          </button>
        </div>
      ) : 
      
      (      
      <GameBoard word={word}/>
      )
    }


    </div>
  );
}

export default App;

// Array of words that we will use for the game 
const words = ['penguins', 'elephant', 'koala', 'synonym', 'peanut',
    'english', 'ruby', 'react', 'friday', 'airplane', 'banana', 'birthday',
    'waterfall', 'trampoline', 'window', 'president', 'basketball', 'hiccup',
    'cheerleader', 'kangaroo', 'groundhog', 'soccer', 'handball', 'caterpillar',
    'shoelaces', 'hungry', 'fishing', 'monster'];

/**
 * Gets a random word from the words array declared on line 2
 * @returns a word that has been randomly selected from the words_array
 */
function getWord(wordList) {
    return (wordList[Math.floor(Math.random() * wordList.length - 1)]);
}