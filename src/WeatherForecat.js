import React from "react";
import WeatherImg from "./WeatherImg";
import "./WeatherForecat.css"



export default function WeatherForecat (props) {
    return (
        <div className="WeatherForecat">
            <div className="row">
                <div className="WeatherForecat-day">
                    <WeatherImg code = "01d" size = {32}/>
                </div>

                <div className="WeatherForecat-temperature">
                    <span className="WeatherForecat-max">19</span>
                    <span className="WeatherForecat-min">10</span>
                </div>

            </div>
            
        </div>
    )
}