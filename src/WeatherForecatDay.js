import React from "react";
import WeatherImg from "./WeatherImg";


export default function WeatherForecatDay(props) {
function MaxTemp (){
    let maximum = Math.round(props.data.temp.max);
    return `${maximum}°`;
}

function MinTemp (){
    let minimum = Math.round(props.data.temp.min);
    return `${minimum}°`;
}

function day (){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
}

    return (
        <div>
            <div className="WeatherForecat-day">{" "} {day()}</div>
                      <WeatherImg code = {props.data.weather[0].icon} size = {32}/>

                <div className="WeatherForecat-temperature">
                    <span className="WeatherForecat-max">{MaxTemp()}</span>
                    <span className="WeatherForecat-min">{MinTemp()}</span>
                </div>
        </div>
    );
    
}