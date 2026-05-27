import React, { useEffect, useState } from 'react'

function A() {
let [city,setcity]=useState("Hyderabad")

useEffect(()=>{
 if(city==="Hyderabad")
    {
        setcity("Banglore")
    }
    else {
        setcity("Delhi")
    }
},[])


  return (
   
    <h1>I live in {city}</h1>
  
  )
}

export default A
