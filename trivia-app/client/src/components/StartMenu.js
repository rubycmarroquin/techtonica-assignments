const StartMenu = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("inside the handle submit");
    };

  return (
    <div className = "StartMenuDiv">
      <h2 className="GameOptionsHeader">Game Options </h2>
      <div className="GameOptionsDiv">
        <form >
            <label htmlFor="amount">How many questions would you like to generate?</label>
            <select>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            </select>
            <input type="submit" value="Submit" onClick={handleSubmit}/>
        </form>
      </div>
    </div>
  )
}

export default StartMenu;
