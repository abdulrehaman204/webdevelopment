import React, { useState } from 'react'

function Weather() {
    const[city,setcity]=useState("")
    const[Weather,setweather]=useState(null)

    const checkWeather = ()=>{
        setweather({temp:"30^c",condition : "sunny"})
    }
  return (
    <div>
      <input onChange={(e)=>setcity(e.target.value)} placeholder='City'/>
      <button onClick={checkWeather}>Get weather</button>
      {Weather && (
        <div>
            <h1>{city}</h1>
            <p>{Weather.temp}</p>
            <p>{Weather.condition}</p>
       </div>
      )}
    </div>
  )
}

export default Weather
