import React, {useState} from "react";
import "./WeatherApp.css"
import axios from "axios";
import AboutWeather from "./AboutWeather";
import LoaderSpiner from "./LoaderSpiner";
import WeatherForecat from "./WeatherForecat"

export default function WeatherApp (props){
    const [weatherData, setWeatherData] = useState({loadingReady : false})
    const [city, setCity] = useState (props.defaultCity);
    function showWeather(response) {
        console.log(response.data);
        setWeatherData({
           loadingReady: true, 
           coord:response.data.coord,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon
        });
    }

    function handleSubmit (event){
        event.preventDefault();
        searchEngien()
    }

    function cityChange(event){
        setCity(event.target.value);
    }

    function searchEngien(){
             const apiKey = "c409940fd7208150de003ea7999c3e64";
             let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric `;
             axios.get(url).then(showWeather); 
        
    }

    if (weatherData.loadingReady) {
         return (
        
            <div className='WeatherApp' > 
          
          {/* Search Form*/}

      <form className='SerchForm' onSubmit={handleSubmit}>
         <div className="row">
            <div className='col-6'>
              <input className='form-control' type="search" placeholder="Enter yor city" 
              autoFocus="on"
              onChange={cityChange} />
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

        <AboutWeather data={weatherData}/>
        <WeatherForecat coord = {weatherData.coord} />

     </div>
  );
    } else {
        
        searchEngien();
            
             return (
                <div className="text-center">
                <LoaderSpiner />
                </div>
             )
    }
}
   