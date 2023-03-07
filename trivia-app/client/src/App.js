import "./App.css";
import { useState } from "react";
import StartMenu from "./components/StartMenu";

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
        console.log("this is the data: ", result);
        setData(result);
      });

    setStarted(true);
  };

  return (
    <div>
      <h1>Welcome to The Trivia Game</h1>
      {!started ? (
        <>
          <StartMenu
            setAmount={setAmount}
            setCategory={setCategory}
            setDifficulty={setDifficulty}
          />
          <button
            type="button"
            onClick={loadQuestions}
            disabled={!amount || !category || !difficulty}
          >
            Start Game
          </button>
        </>
      ) : (
        <h2> Started Game</h2>
      )}
    </div>
  );
}

export default App;
