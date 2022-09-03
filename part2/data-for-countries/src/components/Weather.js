import axios from "axios"
import { useEffect, useState } from "react"
import IconWeather from "./IconWeather"

const Weather = ({ lat, lon, capital }) => {
  const [weather, setWeather] = useState()

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`)
      .then(response => {
        setWeather(response.data)
      })
  }, [lat, lon])

  return (
    <>
      <h2>Weather in {capital}</h2>
      <p>temperature {weather && weather.main.temp} Celcius</p>
      {weather && <IconWeather icon={weather.weather[0].icon} />}
      <p>wind {weather && weather.wind.speed} m/s</p>
    </>
  )
}

export default Weather