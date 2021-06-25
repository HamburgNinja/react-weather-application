import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function weatherForecast() {
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
