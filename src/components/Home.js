import React, { useState } from "react";
import CloudIcon from "@material-ui/icons/Cloud";
import WeatherReport from "./WeatherReport";

const Home = () => {
	const apiKey = '2f9da10777775685f6c591342a2a6324';
	const [city, setCity] = useState("");
	const [weather, setWeather] = useState({});
  let changeCity = (event) => {
    setCity(event.target.value);
  };

  const handleClick = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
				console.warn(data);
        setWeather(data);
      });
  };
  return (
    <div>
      <h3>Weather App</h3>
      <CloudIcon className="icon" />
      <div>
        <label>Please Select City:</label>
        <input type="text" value={city} onChange={changeCity} />
        <button onClick={handleClick}>Search</button>
      </div>
      <WeatherReport weather={weather}/>
    </div>
  );
};

export default Home;
