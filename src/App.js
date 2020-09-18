import React, { useState } from 'react';

import WeatherCard from './components/WeatherCard/WeatherCard';

import './assets/global.css'
import './App.css'

function App() {

  //Pega os valores do input
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ city, setCity ] = useState('')
  const [ active, setActive ] = useState(false)

  // Input handler function
  const inputHandler = (input) => {    
    setSearchTerm(input.target.value)
  }

  //Submit handler function
  const submitHandler = (event) => {
    event.preventDefault()
    setCity(searchTerm.toUpperCase())
    setActive(true)
  }

  return (
    <div className="App">
      <div className="search-block">
        <label>Digite o nome da cidade</label>
        <input type="text" id="city" required placeholder="Morumbi" autoComplete="off" onChange={inputHandler}></input>
        <button type="submit" onClick={submitHandler}>Search</button>
      </div>
      <div className={ active ? 'weather-block' : 'display-none' }>
        <WeatherCard city={city} temperature={'30 C'} description={'Pouco nublado'} max={'31 C'} min={'16 C'}></WeatherCard>
      </div>
    </div>
  );
}

export default App;
