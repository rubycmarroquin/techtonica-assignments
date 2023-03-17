import "./App.css";
import { useState } from "react";
import StartMenu from "./components/StartMenu";
import GameScreen from "./components/GameScreen";
import Music from "./components/Music";

function App() {
  const [data, setData] = useState(null);
  const [started, setStarted] = useState(false);
  const [amount, setAmount] = useState(null);
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);

  const loadQuestions = () => {
    const params = new URLSearchParams({
      amount: amount,
      category: category,
      difficulty: difficulty,
    });
    // fetch the data from the backend
    fetch(`http://localhost:3001/game?${params}`)
      .then((response) => response.json())
      .then((result) => {
        // console.log("this is the data inside loadQuestions(): ", result);
        setData(result);
      });

    setStarted(true);
  };

  return (
    <div className="MainDiv">
      {!started ? (
        <div className="MainDivInner">
          <h1 className="GameTitle">Trivia Game</h1>
          <StartMenu
            setAmount={setAmount}
            setCategory={setCategory}
            setDifficulty={setDifficulty}
          />
          <button
            className="StartGameButton"
            type="button"
            onClick={loadQuestions}
            disabled={!amount || !category || !difficulty}
          >
            Start Game
          </button>
        </div>
      ) : (
        <div className="MainDiv">
          <div className="GameStartDiv">
            {data && (
              <GameScreen
                setStarted={setStarted}
                data={data}
                setAmount={setAmount}
                setCategory={setCategory}
                setDifficulty={setDifficulty}
              />
            )}
          </div>
        </div>
      )}
      <Music />
    </div>
  );
}

// if data evaluates to true, it will render the component on the right - conditional rendering - data is "truthy"
export default App;
