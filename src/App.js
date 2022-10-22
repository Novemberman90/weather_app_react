import React from "react";
import './App.css';
import WeatherApp from "./WeatherApp";

export default function App() {
  return (
   <div className="App">
      <WeatherApp defaultCity = {`Vinnytsia`} />
   </div> 
  )
}

