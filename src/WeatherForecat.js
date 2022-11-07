import React,{ useState, useEffect } from "react";
import "./WeatherForecat.css";
import axios from "axios";
import WeatherForecatDay from "./WeatherForecatDay";


export default function WeatherForecat (props) {
    let [loadedData, setloadedData] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    useEffect(() => {
      setloadedData(false);

    }, [props.coord]);
    

    function handleResponse(response){

        setForecastData(response.data.daily);
        setloadedData(true);
    }
   
    function loadCity(params) {
        let apiKey = "16fa7b2585de322b57b5fa67dee8a945";
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


    axios.get(apiUrl).then(handleResponse);

    }

        /* Forecast */

    if (loadedData) { 
        return (
        <div className="WeatherForecat">
            <div className="row p-2 mt-2 Weather-forecast-block">
                {forecastData.map(function (dailyForecast, index) {
                    if ( index < 6 ) {
                        return (
                            <div className="col-sm  forecastDay" key={index}>
                                <WeatherForecatDay data={dailyForecast} />
                            </div>
                            
                        );
                    }else{
                        return null;
                    }

                })}
            </div>
        </div>
    );
    } else {
        loadCity();
    
    return null;
    }
    
}