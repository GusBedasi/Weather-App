import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'

import WeatherCard from './components/WeatherCard/WeatherCard';

import './assets/global.css'
import './App.css'

function App() {

  //Pega os valores do input
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ city, setCity ] = useState('')
  const [ active, setActive ] = useState(false)

  const inputRef = useRef()

  const [fullWeatherInfo, setFullWeatherInfo] = useState({weather: '', cityName: '', temperature: '', description: '', max: '', min: ''})

  const apiKey = 'null' //a chave da API foi removido por motivos obvios

  // Input handler function
  const inputHandler = (input) => {    
    setSearchTerm(input.target.value)
  }

  //Submit handler function
  const submitHandler = (event) => {
    event.preventDefault()
    setCity(searchTerm.toUpperCase())
    setActive(true)
    setSearchTerm('')
    inputRef.current.focus()

  }

  const fahrenheitConversor = (temp) => {
    return  Math.floor(temp - 273.15)
  }

  useEffect(() => {
    async function fetchData(){
      const response = await (await axios.get(`//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)).data
      
      const weather = await response.weather[0].main
      const cityName = await response.name
      const temperature = fahrenheitConversor(response.main.temp)
      const description = await response.weather[0].description
      const max = fahrenheitConversor(response.main.temp_max)
      const min = fahrenheitConversor(response.main.temp_min)

      setFullWeatherInfo({...fullWeatherInfo, weather, cityName, temperature, description, max, min})
    }

    if(active){
      fetchData()
    }
  }, [city])

  return (
    <div className="App">
      <div className="search-block">
        <label>Digite o nome da cidade</label>
        <input ref={inputRef} type="text" id="city" required value={searchTerm} placeholder="Nome da cidade" autoComplete="off" onChange={inputHandler}></input>
        <button type="submit" onClick={submitHandler}>Search</button>
      </div>
      <div className={ active ? 'weather-block' : 'display-none' }>
        <WeatherCard weather={fullWeatherInfo.weather} city={fullWeatherInfo.cityName} temperature={fullWeatherInfo.temperature + ' C'} description={fullWeatherInfo.description} max={fullWeatherInfo.max + ' C'} min={fullWeatherInfo.min + ' C'}></WeatherCard>
      </div>
    </div>
  );
}

export default App;
