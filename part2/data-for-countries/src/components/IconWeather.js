import { useState } from "react"

const IconWeather = ( { icon } ) => {
  const[src] = useState(`http://openweathermap.org/img/wn/${icon}@2x.png`)

  return (
    <img src={src} alt="icon" />
  )
}

export default IconWeather