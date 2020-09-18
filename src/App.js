import React, { useEffect, useState } from 'react';
import axios from 'axios'

import WeatherCard from './components/WeatherCard/WeatherCard';

import './assets/global.css'
import './App.css'

function App() {

  //Pega os valores do input
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ city, setCity ] = useState('')
  const [ active, setActive ] = useState(false)

  const [fullWeatherInfo, setFullWeatherInfo] = useState({cityName: '', temperature: '', description: '', max: '', min: ''})

  const apiKey = 'null'

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

  const fahrenheitConversor = (temp) => {
    return  Math.floor(temp - 273.15)
  }

  useEffect(() => {
    async function fetchData(){
      const response = await (await axios.get(`//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)).data
      
      const cityName = response.name
      const temperature = fahrenheitConversor(response.main.temp)
      const description = response.weather[0].description
      const max = fahrenheitConversor(response.main.temp_max)
      const min = fahrenheitConversor(response.main.temp_min)

      setFullWeatherInfo({...fullWeatherInfo, cityName, temperature, description, max, min})
    }

    if(active){
      fetchData()
    }
  }, [city])

  return (
    <div className="App">
      <div className="search-block">
        <label>Digite o nome da cidade</label>
        <input type="text" id="city" required placeholder="Morumbi" autoComplete="off" onChange={inputHandler}></input>
        <button type="submit" onClick={submitHandler}>Search</button>
      </div>
      <div className={ active ? 'weather-block' : 'display-none' }>
        <WeatherCard city={fullWeatherInfo.cityName} temperature={fullWeatherInfo.temperature + ' C'} description={fullWeatherInfo.description} max={fullWeatherInfo.max + ' C'} min={fullWeatherInfo.min + ' C'}></WeatherCard>
      </div>
    </div>
  );
}

export default App;
