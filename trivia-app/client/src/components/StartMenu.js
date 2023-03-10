const StartMenu = (props) => {
  const handleAmount = (e) => {
    props.setAmount(e.target.value);
  };

  const handleCategory = (e) => {
    props.setCategory(e.target.value);
  };

  const handleDifficulty = (e) => {
    props.setDifficulty(e.target.value);
  };

  return (
    <div className="StartMenuDiv">
      <div className="GameOptionsHeaderDiv">
        <h2 className="GameOptionsHeader">Configure your game settings</h2>
      </div>
      <div className="GameOptionsDiv">
        <form>
          <label htmlFor="amount">
            Select number of questions
            <br />
          </label>
          <select className="DropDownMenu" onChange={handleAmount}>
            <option className="placeholder" value="" disabled selected>
              Choose a value
            </option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
          <br></br>
          <label htmlFor="category">
            Select category
            <br />
          </label>
          <select className="DropDownMenu" onChange={handleCategory}>
            <option className="placeholder" value="" disabled selected>
              Choose a value
            </option>
            <option value="23">History</option>
            <option value="9">General Knowledge</option>
            <option value="31">Japanese Anime & Manga</option>
            <option value="27">Animals</option>
          </select>
          <br></br>
          <label htmlFor="category">
            Select difficulty
            <br />
          </label>
          <select className="DropDownMenu" onChange={handleDifficulty}>
            <option className="placeholder" value="" disabled selected>
              Choose a value
            </option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option className="hard" value="hard">
              Hard
            </option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default StartMenu;
