const WeatherCard = ({data}) => {
    return (
        <div className="weather-card">
            <div className="result">
                <p>City: <span className="data">
                    {data.data.name}, {data.data.sys.country}
                </span>
                </p>
                <p>Description: <span className="data">
                {data.data.weather[0].description}
              </span>
            </p>
            <img src={`http://openweathermap.org/img/wn/${data.data.weather[0].icon}@4x.png`} alt={"Icon from Open Weather Api"}/>
            <p>
              Temperature: <span className="data">
                {data.data.main.temp} <sup>o</sup>F
              </span>
            </p>
            <p>
              Feels Like: <span className="data">
                {data.data.main.feels_like} <sup>o</sup>F
              </span>
            </p>

            </div>

        </div>
    )
}

export default WeatherCard;