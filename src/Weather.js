import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div classNAme="col-9">
            <input type="search" placeholder="Enter city" />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-info" />
          </div>
        </div>
      </form>
      <h1>Hamburg, DE</h1>
    </div>
  );
}
