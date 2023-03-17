import Question from "./Question";
import EndScreen from "./EndScreen";
import Score from "./Score";
import { useState } from "react";

const GameScreen = ({
  data,
  setStarted,
  setAmount,
  setCategory,
  setDifficulty,
}) => {
  const [score, setScore] = useState(0);
  console.log(data);
  const [questionNum, setQuestionNumber] = useState(0);
  const resetGame = () => {
    setStarted(false);
    setAmount(null);
    setCategory(null);
    setDifficulty(null);
  };

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
          <Score score={score} />
        </>
      ) : (
        <EndScreen
          score={score}
          resetGame={resetGame}
          questionNum={questionNum}
        />
      )}
    </div>
  );
};

export default GameScreen;
