import logo from './logo.svg';
import axios from "axios";
import './App.css';
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <h1>Current Weather</h1>
      <h2>Anywhere in the world!</h2>
       <Weather/>
    </div>
  );
}

export default App;
