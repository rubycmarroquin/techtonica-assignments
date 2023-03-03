import './App.css';
import { useState } from "react";
import WeatherForm from './components/weatherForm';
import WeatherCard from './components/weatherCard';

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);

  //A function to do the get request and set the state from the hard code data
  const loadCity = (city) => {
    // pass city name as a param 
    const params = new URLSearchParams({ cityName: city });
    // fetch the data from the backend 
    fetch(`http://localhost:8081/weather?${params}`)
      .then((response) => response.json())
      .then((result) => {
        // console.log("this is the data: ", result)
        setCity(result.weather[0].name);
        setResult(result);
      });
  }

    const handleCityChange = (event) => {
    // console.log(event.target.value)
    // set city value from child 
    setCity(event.target.value);
    // console.log(city);
  }

 const handleSubmit = (e) => {
  e.preventDefault();
  // pass in the city to loadCity to get data from backend 
  loadCity(city);
 }


  return (
    <div className="App">
      <WeatherForm city={city} handleCityChange={handleCityChange} handleSubmit={handleSubmit}/>
      {!result ? <p>Please click the botton to see Data</p> : <WeatherCard data={result} /> }
    </div>
  );
}

export default App;
