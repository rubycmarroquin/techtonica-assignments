const Question = ({ result, score, setScore, questionNum, setQuestionNumber }) => {
  //   console.log("inside the questions comp: ", result);
  let choices = [result.correct_answer, ...result.incorrect_answers];
  console.log(choices);
  const shuffledArray = choices.sort((a, b) => 0.5 - Math.random());
  //   console.log(shuffledArray);

  const handleUserChoice = (e) => {
    console.log(e.target.value);
    if (shuffledArray[e.target.value] === result.correct_answer) setScore(score + 1);
    setQuestionNumber(questionNum+1);
    e.target.checked = false;
      
  };

  return (
    <div className="QuestionCardDiv">
      <h2>Question:</h2>
      <p>{result.question}</p>
      {result.type === "multiple" ? (
        <div className="QuestionChoices">
          <form>
            <input
              type="radio"
              name="answer_choice"
              value="0"
              onChange={handleUserChoice}
            />
            {shuffledArray[0]} <br></br>
            <input
              type="radio"
              name="answer_choice"
              value="1"
              onChange={handleUserChoice}
            />
            {shuffledArray[1]}
            <br></br>
            <input
              type="radio"
              name="answer_choice"
              value="2"
              onChange={handleUserChoice}
            />
            {shuffledArray[2]} <br></br>
            <input
              type="radio"
              name="answer_choice"
              value="3"
              onChange={handleUserChoice}
            />
            {shuffledArray[3]}
          </form>
        </div>
      ) : (
        <div>
          <h1>not a multiple</h1>
          <form>
            <input
              type="radio"
              name="answer_choice"
              value="0"
              onChange={handleUserChoice}
            />{" "}
            {shuffledArray[0]}
            <input
              type="radio"
              name="answer_choice"
              value="1"
              onChange={handleUserChoice}
            />{" "}
            {shuffledArray[1]}
          </form>
        </div>
      )}
    </div>
  );
};

export default Question;
