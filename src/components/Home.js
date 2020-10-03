import React, { useState } from "react";
import CloudIcon from "@material-ui/icons/Cloud";
import WeatherReport from "./WeatherReport";
import { CircularProgress } from "@material-ui/core";

const Home = () => {
  const apiKey = "2f9da10777775685f6c591342a2a6324";
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
		city: '',
		country: '',
		temp: '',
		sunrise: '',
		sunset: '',
		min: '',
		max: '',
	});
  const [error, setError] = useState("");
  const [isLoading, setLoad] = useState(false);

  let changeCity = (event) => {
    setCity(event.target.value);
  };

  const handleClick = async (e) => {
		e.preventDefault();
		try {
			if (!city) {
				alert("Please select a city");
				setWeather({
					city: '',
					country: '',
					temp: '',
					sunrise: '',
					sunset: '',
					min: '',
					max: '',
				});
				setError('');
				return;
			}
			setLoad(true);
			const API_call = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
			)
			const response = await API_call.json();
			if(response.cod === '404'){
				setLoad(false);
				setError(response.message); 
			} 
			else {
				const result = {
					city: response.name,
					country: response.sys.country,
					temp: response.main.temp,
					sunrise: response.sys.sunrise,
					sunset: response.sys.sunset,
					min: response.main.temp_min,
					max: response.main.temp_max,
				}
			setWeather(result);
			setLoad(false);
			setError('');
			}
		}
		catch(err) {	
			
		}
	};

	const calcTemp = (temperature) => {
		let temp = Math.floor(temperature - 273.10)
		return temp;
	}
	
  return(
    <div>
      <h3>Weather App</h3>
      <CloudIcon className="icon" />
      <form onSubmit={handleClick}>
        <label>Please Select City:</label>
        <input type="text" value={city} onChange={changeCity} />
        <button type="submit">Search</button>
      </form>
			{ isLoading ? <CircularProgress /> :
			 error ? <h1>{error}</h1>:
			 <WeatherReport 
				city={weather.city}
				country={weather.country}
				temp={calcTemp(weather.temp)}
				sunrise={weather.sunrise}
				sunset={weather.sunset}
				min={calcTemp(weather.min)}
				max={calcTemp(weather.max)}
			 />}
    </div>
  );
};

export default Home;
