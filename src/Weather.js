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
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-info w-80" />
          </div>
        </div>
      </form>
      <h1>Hamburg, DE</h1>
      <p>Sunday | 14:00</p>
      <div className="row">
        <div className="col-2">🌤</div>
        <div className="col-2">17°C</div>
        <div className="col-8">partly cloudy</div>
      </div>
      <div className="row">
        <div className="col-4">Feels Like 16°C</div>
        <div className="col-4">Humidity 50%</div>
        <div className="col-4">Wind 64km/h</div>
      </div>
    </div>
  );
}
