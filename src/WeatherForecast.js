import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";
import axios from "axios";

export default function weatherForecast(props) {
  function handleForecastResponse(response) {
    console.log(response.data);
  }

  const apiKey = "b409f6a940ab5609bc1ca05aa3fc68e6";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleForecastResponse);

  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col">
          <ul>
            <li>
              <WeatherIcon code="01d" size={50} />
            </li>
            <li className="weather-forecast-day">Saturday</li>
            <li>
              <span>25° | </span>
              <span className="weather-forecast-temp-min">16°</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
