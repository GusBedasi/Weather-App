import React from 'react';

import './styles.css';

import clouds from '../../assets/img/weatherBackground/clouds.jpg'
import cool from '../../assets/img/weatherBackground/cool.jpg'
import lightning from '../../assets/img/weatherBackground/lightning.jpg'
import rain from '../../assets/img/weatherBackground/rain.jpg'
import sunny from '../../assets/img/weatherBackground/sunny.jpg'

function WeatherCard(props) {

  const { city, temperature, description, max, min } = props
  
  return (
    <div className="card">
        <img src=""></img>
        <h2> {city} </h2>
        <h1> {temperature} </h1>
        <h3> {description} </h3>
        <h4> Max: {max} | Min: {min} </h4>
      </div>
  );
}

export default WeatherCard;