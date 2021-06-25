import React from "react";
import DateInfo from "./DateInfo";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <div className="current-date">
        <DateInfo date={props.data.date} />
      </div>
      <div className="row">
        <div className="col-2">
          <div className="current-weather-icon">
            <WeatherIcon code={props.data.icon} size={55} />
          </div>
        </div>
        <div className="col-3 text-center">
          <span className="current-temp">{Math.round(props.data.temp)}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-7 current-weather-description">
          {props.data.description}
        </div>
      </div>
      <div className="row weather-details">
        <div className="col-4 text-center">
          Feels Like: {Math.round(props.data.feelsLike)}°C
        </div>
        <div className="col-4 text-center">
          Humidity: {props.data.humidity}%
        </div>
        <div className="col-4 text-center">
          Wind: {Math.round(props.data.wind)} km/h
        </div>
      </div>
    </div>
  );
}
