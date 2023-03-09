const Question = ({
  amount,
  result,
  score,
  setScore,
  questionNum,
  setQuestionNumber,
}) => {
  /**
   * Source: https://linuxhint.com/decode-html-entities-javascript/
   * Decode HTML Entities
   * @param {event} e
   */
  function decode(str) {
    let txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }
  
  // decode question from results
  const question = decode(result.question);

  // create array of answer choices from results.correct answer & incorrect answers
  let choices = [result.correct_answer, ...result.incorrect_answers];

  // decode answer choices
  choices = choices.map((answer) => decode(answer));

  // store decoded correct answer
  const correct_answer = choices[0];

  // shuffle the answer choices
  const shuffledAnswerOptions = choices.sort((a, b) => 0.5 - Math.random());

  const handleUserChoice = (e) => {
    console.log(e.target.value);
    /* comparing user answer to decoded correct answer */
    if (shuffledAnswerOptions[e.target.value] === correct_answer)
      setScore(score + 1);
    setQuestionNumber(questionNum + 1);
    e.target.checked = false;
  };

  return (
    <div className="QuestionCardDiv">
      <h2>
        Question {questionNum + 1}/{amount}:
      </h2>
      <p>{question}</p>
      {result.type === "multiple" ? (
        <div className="QuestionChoices">
          <form>
            <div className="RadioButton">
              <input
                id="option1"
                type="radio"
                name="answer_choice"
                value="0"
                onChange={handleUserChoice}
              />
              <label htmlFor="option1">{shuffledAnswerOptions[0]}</label>
            </div>
            <div className="RadioButton">
              <input
                id="option2"
                type="radio"
                name="answer_choice"
                value="1"
                onChange={handleUserChoice}
              />
              <label htmlFor="option2">{shuffledAnswerOptions[1]}</label>
            </div>
            <div className="RadioButton">
              <input
                id="option3"
                type="radio"
                name="answer_choice"
                value="2"
                onChange={handleUserChoice}
              />
              <label htmlFor="option3">{shuffledAnswerOptions[2]}</label>
            </div>
            <div className="RadioButton">
              <input
                id="option4"
                type="radio"
                name="answer_choice"
                value="3"
                onChange={handleUserChoice}
              />
              <label htmlFor="option4">{shuffledAnswerOptions[3]}</label>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <form>
            <div className="RadioButton">
              <input
                type="radio"
                id="option1"
                name="answer_choice"
                value="0"
                onChange={handleUserChoice}
              />
              <label htmlFor="option1">{shuffledAnswerOptions[0]}</label>
            </div>
            <div className="RadioButton">
              <input
                id="option2"
                type="radio"
                name="answer_choice"
                value="1"
                onChange={handleUserChoice}
              />
              <label htmlFor="option2">{shuffledAnswerOptions[1]}</label>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Question;
