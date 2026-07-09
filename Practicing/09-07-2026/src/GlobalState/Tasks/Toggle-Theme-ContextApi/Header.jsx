import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Header() {
    const {state} = useContext(ThemeContext)
  return (
    <div>
      <h1>Current Theme: {state.theme}</h1>;
    </div>
  )
}

export default Header
