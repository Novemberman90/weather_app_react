import React from "react"
import FormateDate from "./FormateDate";

export default function AboutWeather(props){
    return (
        <div className='AboutWeather'>
        <h1>{props.data.city}</h1>

        <ul>
          <li>
            <FormateDate date = {props.data.date}/>
          </li>
          <li className="text-capitalize"> {props.data.description} </li>
        </ul>

        <div className='row'>
          <div className='col-6'>

                {/* Temperature and image */}

            <div className='tempfix'>
              <img className='float-left' src={props.data.icon} alt={props.data.description}/>
              <b>{Math.round (props.data.temperature)}</b>
                   <span className='units'>
                     <a className='celsius' href="/" >°C</a>
                     <span className='variant-temp'>|</span>
                     <a  className='fahrenheit' href="/">°F</a>
                  </span>
            </div>
          </div>

            {/* Weather Forecast */}

          <div className='col-6'>
            <div className='WeatherForecast'>
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

      </div>
    );

}