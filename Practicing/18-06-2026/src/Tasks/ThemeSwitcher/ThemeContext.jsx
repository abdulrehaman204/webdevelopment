import React, { createContext, useState } from 'react'

export const mytheme = createContext()

function ThemeContext({children}) {
    const[theme,settheme]=useState("light")
    const toggletheme =()=>{
        settheme(
            theme === "light" ? "dark" : "light"
        )
    }
  return (
<mytheme.Provider value={{theme,toggletheme}}>
  {children}
</mytheme.Provider>
  )
}

export default ThemeContext
