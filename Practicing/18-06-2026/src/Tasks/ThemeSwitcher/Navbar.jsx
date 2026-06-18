import React, { useContext } from 'react'
import { mytheme } from './ThemeContext'

function Navbar() {
    const {theme} = useContext(mytheme)
     const styles = {
    backgroundColor:
      theme === "light" ? "#fff" : "#222",
    color:
      theme === "light" ? "#000" : "#fff",
    minHeight: "100px",
    padding: "20px",
  };
  return (
    <div style={styles}>
      <h1>Navbar Theme : {theme}</h1>
    </div>
  )
}

export default Navbar
