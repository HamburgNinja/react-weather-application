import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForcastData(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);

    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  function tempMax() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }

  function tempMin() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  return (
    <div className="forcast-data">
      <ul>
        <li>
          <WeatherIcon code={props.data.weather[0].icon} size={45} />
        </li>
        <li className="weather-forecast-day">{day()}</li>
        <li>
          <span>{tempMax()} | </span>
          <span className="weather-forecast-temp-min">{tempMin()}</span>
        </li>
      </ul>
    </div>
  );
}
