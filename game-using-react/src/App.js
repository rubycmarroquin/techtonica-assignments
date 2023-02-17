import {useState} from 'react';
import Title from './components/Title';
import GameBoard from './components/GameBoard';
import './App.css';

function App() {

  /* Handles the startButton being clicked and hidden */
  const [startButtonClicked, setStarted] = useState(false);
  
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
      <GameBoard wordList={words}/>
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
