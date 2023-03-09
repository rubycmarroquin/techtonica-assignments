import Question from "./Question";
import { useState } from "react";

const GameScreen = ({ data, setStarted, setAmount, setCategory, setDifficulty }) => {
  const [score, setScore] = useState(0);
  console.log(data);
  const [questionNum, setQuestionNumber] = useState(0);
  const resetGame = () => {
    setStarted(false);
    setAmount(null);
    setCategory(null);
    setDifficulty(null);
  }

  return (
    <div className="GameScreenDiv">
      {questionNum !== data.data.results.length ? (
        <>
          <Question
            amount={data.data.results.length}
            result={data.data.results[questionNum]}
            score={score}
            setScore={setScore}
            questionNum={questionNum}
            setQuestionNumber={setQuestionNumber}
          />
          <div className="ScoreDiv">
            <h2>Current Score: {score}</h2>{" "}
          </div>
        </>
      ) : (
        <div className="EndGameScreen">
          <h1 className="GameOverText">Game Over</h1>
          <div>
            <h2>Your final score: {score}/{questionNum}</h2>
          </div>
          <div>
            <h3>Want to play again?</h3>
            <button className="PlayAgain" type="button" onClick={resetGame}>Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameScreen;
