import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import'bootstrap/dist/css/bootstrap.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
     <App /> 
     <footer>
   <span>
     This project was coded by <a href="https://github.com/Novemberman90">Elena</a>
     and is <a href="https://github.com/Novemberman90/search_engien_weather_react"> open-sourced on GitHub</a>
     and 
     <a href="https://keen-pegasus-9f865e.netlify.app/">hosted om Netlify</a>
     </span>
  </footer>
    </div>
    
  </React.StrictMode>
);

reportWebVitals();
