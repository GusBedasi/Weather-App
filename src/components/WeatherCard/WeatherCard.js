import React, { useEffect, useState } from 'react';

import './styles.css';

import Clouds from '../../assets/img/weatherBackground/Clouds.jpg'
import Thunderstorm from '../../assets/img/weatherBackground/Thunderstorm.jpg'
import Rain from '../../assets/img/weatherBackground/Rain.jpg'
import Clear from '../../assets/img/weatherBackground/Clear.jpg'

function WeatherCard(props) {

  const { weather, city, temperature, description, max, min } = props
  const [ state, setState ] = useState()

  useEffect(() => {
    if (weather === 'Clouds'){
      setState(Clouds)
    }else if (weather === 'Thunderstorm'){
      setState(Thunderstorm)
    }else if (weather === 'Rain'){
      setState(Rain)
    }else if (weather === 'Clear'){
      setState(Clear)
    }
  }, [weather])

  return (
    <div className="card">
        <img src={state} alt="weather-background"></img>
        <h2> {city} </h2>
        <h1> {temperature} </h1>
        <h3> {description} </h3>
        <h4> Max: {max} | Min: {min} </h4>
      </div>
  );
}

export default WeatherCard;