import {useState} from 'react';
import Title from './components/Title'
import './App.css';

function App() {

  /* Handles the startButton being clicked and hidden */
  const [startButtonClicked, setStarted] = useState(false);
  const startClicked = () => {
    // hide the start button 
    setStarted(true);
    // generateGame();
  }

  return (
    <div className="mainDiv">
      <Title />
      <div className="startButtonDiv">
        <button type="button" className={`startButton ${!startButtonClicked ? "" : "hideStartButton"}`} id="startButton" onClick={startClicked}>
          Start Game
        </button>
      </div>
    </div>
  );
}

export default App;