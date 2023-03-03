import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faWind } from '@fortawesome/free-solid-svg-icons';
  import { faDroplet } from '@fortawesome/free-solid-svg-icons'
const WeatherCard = ({ data }) => {
  return (
    <div className="weatherCard">
      <div className="result">
        {
          // when city is not valid
          data.data.cod === "404" ? (
            <h2>City Not Found</h2>
          ) : (
            <>
              <p className="nameOfCity">
                {data.data.name}, {data.data.sys.country}
              </p>
              <p>
                Current temperature:{" "}
                <span>
                  <strong>
                    {Math.round(data.data.main.temp)} <sup>o</sup>F
                  </strong>
                </span>
              </p>
              <p>
                Feels Like{" "}
                <span>
                  <strong>
                    {Math.round(data.data.main.feels_like)} <sup>o</sup>F
                  </strong>
                </span>
              </p>
              <p>
                Max:{" "}
                <strong>
                  {Math.round(data.data.main.temp_max)}
                  <sup>o</sup>F
                </strong>{" "}
                Min:{" "}
                <strong>
                  {Math.round(data.data.main.temp_min)}
                  <sup>o</sup>F
                </strong>
              </p>
              <p>
                Wind: <FontAwesomeIcon icon={faWind} /> {Math.round(data.data.wind.speed)}mph
              </p>
              <p>
                Humidity: <FontAwesomeIcon icon={faDroplet} /> {Math.round(data.data.wind.speed)}%
              </p>
              <div className="weatherIconDiv">
                <div id="description">
                  <p className="description">
                    {data.data.weather[0].description}
                  </p>
                </div>
                <div id="icon">
                  <img
                    className="weatherIcon"
                    src={`http://openweathermap.org/img/wn/${data.data.weather[0].icon}@4x.png`}
                    alt={"Icon from Open Weather Api"}
                  />
                </div>
              </div>
            </>
          )
        }
      </div>
    </div>
  );
};

export default WeatherCard;
