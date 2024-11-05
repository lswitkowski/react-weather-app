import React, {useState} from "react";
import axios from "axios";
import "./App.css";

export default function Weather(){
      let [city, setCity] = useState("");
      let [message, setMessage] = useState("");
      let [weather, setWeather] = useState("");
     
    function updateCity(event) {
        setCity(event.target.value);
      }
    
        function displayWeather(response) {
          setMessage(true);
          setWeather({
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description,
          });
        }
        function handleSubmit(event) {
            event.preventDefault();

          let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
          let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
          axios.get(apiUrl).then(displayWeather);
        }
        let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city"
        autofocus
        required
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (message) {
    return (
      <div>
        {form}
        <h2 className="city">{city}</h2>
        <p>
          Temperature: {Math.round(weather.temperature)}°C
          <br />
          Description: {weather.description}
          <br />
          Humidity: {weather.humidity}%<br />
          Wind: {weather.wind}km/h
          <br />
          <img src={weather.icon} alt={weather.description} />
          <br />
        </p>
      </div>
    );
  } else {
    return form;
  }
}