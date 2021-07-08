import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Hamburg" />
        <footer>
          <a
            href="https://github.com/HamburgNinja/react-weather-application"
            target="_blank"
            rel="noreferrer"
          >
            open source code
          </a>{" "}
          by{" "}
          <a
            href="https://github.com/HamburgNinja"
            target="_blank"
            rel="noreferrer"
          >
            HamburgNinja
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
