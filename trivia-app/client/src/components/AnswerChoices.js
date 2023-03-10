const MultipleChoice = ({index,  option, handlerUserChoice }) => {
  /** Send user choice back to parent */
  const handleOption = (e) => {
    handlerUserChoice(e); 
  }

  return (
    <div className="RadioButton">
      <input
        id={`option${index+1}`}
        type="radio"
        name="answer_choice"
        value={index}
        onChange={handleOption}
      />
      <label htmlFor={`option${index+1}`}>{option}</label>
    </div>
  );
};

export default MultipleChoice;
