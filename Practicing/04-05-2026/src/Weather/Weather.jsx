import React, { useState } from 'react'

function Weather() {
    const[city,setcity]=useState("")
    const[weather,setweather]=useState(null)

    const checkWeather=()=>{
        setweather({temp:"30^c",condition : "sunny"})
    }
  return (
    <div>
        <input onChange={(e)=>setcity(e.target.value)} placeholder='City'/>
      <button onClick={checkWeather}> Get Weather</button>
      {weather&&(
          <div>
            <h1>{city}</h1>
            <p>{weather.temp}</p>
            <p>{weather.condition}</p>
       </div>
      )}
    </div>
  )
}

export default Weather
