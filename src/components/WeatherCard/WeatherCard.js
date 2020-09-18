import React from 'react';

import './styles.css';

function WeatherCard(props) {

  const { city, temperature, description, max, min } = props
  //<img src=""></img>

  return (
      <div className="card">
        <h2>{city}</h2>
        <h1>{temperature}</h1>
        <h3>
          {description}
        </h3>
        <h4>
          Max: {max} | Min: {min}
        </h4>
      </div>
  );
}

export default WeatherCard;