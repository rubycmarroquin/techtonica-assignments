import { useState } from "react";
const WeatherForm = (props) => {

  const [cityName, setCityName] = useState("");
  const handleCityChange = (event) => {
    setCityName(event.target.value);
    console.log(cityName);
  }

    return (
        <div className="weather">
        <h1 className="App-header">Weather Forecast</h1>
        <form onSubmit={props.handleSubmit}>
          <input
            id="city-name"
            type="text"
            placeholder="Please enter your city"
            name="city"
            value={cityName}
            onChange={handleCityChange} // set the cityName 
            required // instead of readonly, change to required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default WeatherForm;