import './App.css';
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="Weather-Container">
        <h1 class="p-1">Current Weather</h1>
        <h2>Anywhere in the world!</h2>
        <Weather />
        <p>
          <footer>
            This website was coded by{" "}
            <a
              href="https://github.com/lswitkowski/"
              target="_blank"
              rel="noreferrer"
            >
              Lisa W
            </a>
            , open-sourced on{" "}
            <a
              href="https://github.com/lswitkowski?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            , and hosted{" "}
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noreferrer"
              title="netlify"
            >
              Netlify
            </a>
          </footer>
        </p>
      </div>
    </div>
  );
}

export default App;
