import { Label } from '@material-ui/icons';
import React from 'react';

const WeatherReport = (props) => {
    const { weather } = props;
    return (
     <div>
       <Label>Weather for {weather.name}</Label>
       {/* {weather ? Object.values(weather).map((e) => {
         return e;
       }) : null} */}
     </div>   
    )
}

export default WeatherReport;