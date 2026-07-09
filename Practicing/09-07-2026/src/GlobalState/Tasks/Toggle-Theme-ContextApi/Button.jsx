import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Button() {
    const {dispatch} = useContext(ThemeContext)
  return (
    <div>
       <button onClick={() => dispatch({type: "TOGGLE_THEME",})}>Toggle Theme</button>
    </div>
  )
}

export default Button
