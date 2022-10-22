import React, {useState} from "react";
import "./WeatherApp.css"
import axios from "axios";
import FormateDate from "./FormateDate";

export default function WeatherApp (props){
    const [weatherData, setWeatherData] = useState({loadingReady : false})
    function showWeather(response) {
        console.log(response.data);
        setWeatherData({
           loadingReady: true, 
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            icon:  `http://openweathermap.org/img/wn/${
                response.data.weather[0].icon
              }@2x.png`
        })
    }

    if (weatherData.loadingReady) {
         return (
        
            <div className='WeatherApp' > 
          
          {/* Search Form*/}

      <form className='SerchForm'>
         <div className="row">
            <div className='col-6'>
              <input className='form-control' type="search" value="Enter yor city"/>
            </div>
            
            <div className='col-3 SearchButton'>
              <input className='btn btn-outline-dark' type="submit"  value="Search"/>
            </div>

          <div className='col-3 CurrentButton'>
              <input className='btn btn-outline-dark' type="submit" name="current" value="Current"/>
          </div>

          </div>
        </form>

          {/* Weather info */}

        <div className='AboutWeather'>
          <h1>{weatherData.city}</h1>

          <ul>
            <li>
              <FormateDate date = {weatherData.date}/>
            </li>
            <li className="text-capitalize"> {weatherData.description} </li>
          </ul>

          <div className='row'>
            <div className='col-6'>

                  {/* Temperature and image */}

              <div className='tempfix'>
                <img className='float-left' src={weatherData.icon} alt={weatherData.description}/>
                <b>{Math.round (weatherData.temperature)}</b>
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
                  Humidity: {weatherData.humidity} %
                  </li>
                  <li>
                    Wind speed: {Math.round(weatherData.wind)} km/h
                  </li>
                </ul>
              </div>
              
            </div>

          </div>

        </div>


     </div>
  );
    } else {
        
            const apiKey = "c409940fd7208150de003ea7999c3e64";
             let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
             axios.get(url).then(showWeather); 
        
             return "Loading..."
    }
}
   