import './App.css';
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <h1>Current Weather</h1>
      <h2>Anywhere in the world!</h2>
      <Weather />
      <p>
        This website was coded by
        <a
          href="https://github.com/lswitkowski/"
          target="_blank">
          {" "}
          Lisa W
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/lswitkowski?tab=repositories"
          target="_blank"
        >
          GitHub
        </a>
        , and hosted on
        <a href="https://www.netlify.com/" target="_blank" title="netlify">
          Netlify
        </a>
      </p>
    </div>
  );
}

export default App;
