import React,{useState} from "react";

export default function WeatherTemperetureUnit (props){
    const [unit, setUnit] = useState(`celsius`);


    function showFahrenheit(event){
        event.preventDefault();
        setUnit(`fahrenheit`);
    }
    function showCelius (event){
    event.preventDefault();
        setUnit(`celsius`);
}

    function fahrenheit (){
        return(props.celsius *9) / 5 +32;
    }

    if (unit === `celsius`) {
        return (
        <div>
            <b>{Math.round (props.celsius)}</b>
                        <span className='units'>°C | {" "}
                            <a  className='fahrenheit' href="/" onClick={showFahrenheit}>°F</a>
                        </span> 
        </div>
    )
    } else {
        return (
            <div>
                
            
            <b>{Math.round (fahrenheit())}</b>
            <span className='units'>
       <a className='celsius' href="/" onClick={showCelius} >°C</a>{" "} | °F
       </span>
       </div>
        )
    }
    
};

/*<a className='celsius' href="/" >°C </a>
<span className='units'>
       <a className='celsius' href="/" >°C </a> | °F
       </span>*/