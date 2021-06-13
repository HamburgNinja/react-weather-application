import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/HamburgNinja/react-weather-application"
            target="_blank"
            rel="noreferrer"
          >
            open source code
          </a>{" "}
          by HamburgNinja
        </footer>
      </div>
    </div>
  );
}

export default App;
