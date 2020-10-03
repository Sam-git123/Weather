import React from "react";
import moment from "moment";

const WeatherReport = (props) => {
  const { city, country, temp, sunset, sunrise, min, max } = props;

  return (
    <div>
      {city && country && <h4>{city}, {country}</h4>}
      {temp >= 0 && <h4>Temperature : {temp}&deg;</h4>}
      {sunrise && <h4>Sunrise at: {moment.unix(sunrise).format("h:mm:ss a")}</h4>}
      {sunset && <h4>Sunset at: {moment.unix(sunset).format("h:mm:ss a")}</h4>}
      {min >= 0 && max >= 0 && <h4>Min: {min}&deg;   Max: {max}&deg;</h4>}
    </div>
  );
};

export default WeatherReport;
