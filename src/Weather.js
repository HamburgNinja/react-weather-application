import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Hamburg, DE</h1>
      <p className="current-date">Sunday | 14:00</p>
      <div className="row">
        <div className="col-2">
          <img
            src="https://freesvg.org/img/weather-few-clouds.png"
            alt=""
            className="current-weather-icon"
          />
        </div>
        <div className="col-3 text-center">
          <span className="current-temp">17</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-7 current-weather-description">partly cloudy</div>
      </div>
      <div className="row weather-details">
        <div className="col-4 text-center">Feels Like 16°C</div>
        <div className="col-4 text-center">Humidity 50%</div>
        <div className="col-4 text-center">Wind 64km/h</div>
      </div>
    </div>
  );
}
