import React, { useState } from 'react'
import Layout from './Layout'

function B() {
    const[theme,settheme]=useState("Light")

    const toggletheme=()=>{
        settheme(theme === "Light" ? "Dark" : "Light")
    }
  return (
    <div>
        <button onClick={toggletheme}>
        Toggle Theme
      </button>
      <Layout theme={theme}/>
    </div>
  )
}

export default B
