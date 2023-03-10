const EndScreen = ({ score, questionNum, resetGame }) => {
  return (
    <div className="EndGameScreen">
      <h1 className="GameOverText">Game Over</h1>
      <div>
        <h2>
          Your final score: {score}/{questionNum}
        </h2>
      </div>
      <div>
        <h3>Want to play again?</h3>
        <button className="PlayAgain" type="button" onClick={resetGame}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default EndScreen;
