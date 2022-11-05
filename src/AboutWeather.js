import React from "react"
import FormateDate from "./FormateDate";
import WeatherImg from "./WeatherImg";
import "./AboutWeather.css"
import WeatherTemperetureUnit from "./WeatherTemperetureUnit"


export default function AboutWeather(props){
    return (
        <div className='AboutWeather text-sm-start'>
        <h1>{props.data.city}</h1>

        <ul>
          <li>
            <FormateDate date = {props.data.date}/>
          </li>
          <li className="text-capitalize"> {props.data.description} </li>
        </ul>

        <div className='row'>
          <div className='col-sm-6'>

                {/* Temperature and image */}

            <div className='tempfix'>
                <div className="d-flex d-sm-flex tempfix-gird">
                    <div>
                    <WeatherImg size={52} code = {props.data.icon} alt = {props.data.description}/>
                    </div>

                    {/* Temperature unit */}

                    <div>
                        <WeatherTemperetureUnit celsius = {props.data.temperature} />

                    </div>
                  </div>
            </div>
          </div>

          {/* Weather description */}

          <div className='col-sm weather-description'>
              <ul>
                <li>
                Humidity: {props.data.humidity} %
                </li>
                <li>
                  Wind speed: {Math.round(props.data.wind)} km/h
                </li>
              </ul>
            
            
          </div>

        </div>

      </div>
    );

}