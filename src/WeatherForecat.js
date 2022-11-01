import React,{ useState } from "react";
import "./WeatherForecat.css";
import axios from "axios";
import WeatherForecatDay from "./WeatherForecatDay";


export default function WeatherForecat (props) {
    let [loadedData, setloadedData] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    function handleResponse(response){

        setForecastData(response.data.daily);
        setloadedData(true);
    }
   

    if (loadedData) { 
        console.log(forecastData);
        return (
        <div className="WeatherForecat">
            <div className="row">
                <div className="col">
                      <WeatherForecatDay data= {forecastData[0]}/>
                </div>
            </div>
            
        </div>
    );
    } else {
    let apiKey = "16fa7b2585de322b57b5fa67dee8a945";
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


    axios.get(apiUrl).then(handleResponse);
     return null;
    }
    
    
}