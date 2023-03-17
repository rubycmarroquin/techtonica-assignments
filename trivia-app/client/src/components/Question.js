import AnswerChoices from "./AnswerChoices";
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
      <div className="QuestionChoices">
        <form>
          {shuffledAnswerOptions.map((option, index) => (
            <AnswerChoices
              option={option}
              index={index}
              handlerUserChoice={handleUserChoice}
            />
          ))}
        </form>
      </div>
    </div>
  );
};

export default Question;
