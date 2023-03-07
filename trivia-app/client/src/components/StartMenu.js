const StartMenu = (props) => {

  return (
    <div className="StartMenuDiv">
      <h2 className="GameOptionsHeader">Game Options </h2>
      <div className="GameOptionsDiv">
        <form>
          <label htmlFor="amount">Select number of questions</label>
          <select onChange={handleAmount} required>
            <option value="" disabled selected>Choose a value</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
          <br></br>
          <label htmlFor="category">Select category</label>
          <select onChange={handleCategory}>
            <option value="" disabled selected>Choose a value</option>
            <option value="23">History</option>
            <option value="9">General Knowledge</option>
            <option value="19">Mathematics</option>
            <option value="27">Animals</option>
          </select>
          <br></br>
          <label htmlFor="category">Select difficulty</label>
          <select onChange={handleDifficulty}>
            <option value="" disabled selected>Choose a value</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default StartMenu;
