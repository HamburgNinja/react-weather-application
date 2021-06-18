import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Enter city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-2">
            <input type="submit" value="search" className="btn submit-btn" />
          </div>
        </div>
      </form>
      <h1>Hamburg, DE</h1>
      <p className="current-date">Sunday | 14:00</p>
      <div className="row">
        <div className="col-2 current-weather-icon">🌤</div>
        <div className="col-3 current-temp">17°C</div>
        <div className="col-7 current-weather-description">partly cloudy</div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4">Feels Like 16°C</div>
        <div className="col-4">Humidity 50%</div>
        <div className="col-4">Wind 64km/h</div>
      </div>
    </div>
  );
}
