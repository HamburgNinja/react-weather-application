import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn submit-btn" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <p className="current-date">Sunday | 14:00</p>
        <div className="row">
          <div className="col-2">
            <img
              src="https://freesvg.org/img/weather-few-clouds.png"
              alt={weatherData.description}
              className="current-weather-icon"
            />
          </div>
          <div className="col-3 text-center">
            <span className="current-temp">{Math.round(weatherData.temp)}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-7 current-weather-description">
            {weatherData.description}
          </div>
        </div>
        <div className="row weather-details">
          <div className="col-4 text-center">
            Feels Like: {Math.round(weatherData.feelsLike)}°C
          </div>
          <div className="col-4 text-center">
            Humidity: {weatherData.humidity}%
          </div>
          <div className="col-4 text-center">
            Wind: {Math.round(weatherData.wind)}km/h
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b409f6a940ab5609bc1ca05aa3fc68e6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
