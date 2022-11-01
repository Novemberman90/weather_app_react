import React, { useState } from "react";
import WeatherImg from "./WeatherImg";
import "./WeatherForecat.css"
import axios from "axios";



export default function WeatherForecat (props) {
    let [loadedData, setloadedData] = useState (false);
    let [forecastData, setForecastData] = useState(null);
    function handleResponse(response){
        setForecastData (response.data.daily);
        setloadedData(true);
    }
   

    if (loadedData) { 
        console.log (forecastData)
        return (
        <div className="WeatherForecat">
            <div className="row">
                <div className="col">
                      <div className="WeatherForecat-day"> Mon</div>
                      <WeatherImg code = "01d" size = {32}/>

                <div className="WeatherForecat-temperature">
                    <span className="WeatherForecat-max">19</span>
                    <span className="WeatherForecat-min">10</span>
                </div>
                </div>
            </div>
            
        </div>
    )
    } else {
         const apiKey = "c409940fd7208150de003ea7999c3e64";
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
     return null
    }
    
}