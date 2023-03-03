const WeatherForm = (props) => {
  //what is inside props = {city, handleCityChange, handleSubmit}
    return (
        <div className="weather">
        <h1 className="App-header">Weather Forecast</h1>
        <form onSubmit={props.handleSubmit}>
          <input
            id="city-name"
            type="text"
            placeholder="Please enter your city"
            name="city"
            // value={cityName}
            // onChange={handleCityChange} // set the cityName 
            value={props.city}
            onChange={props.handleCityChange}
            required // instead of readonly, change to required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default WeatherForm;