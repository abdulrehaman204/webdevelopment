import React from 'react'
import ThemeProvider from './ThemeContext'
import Header from './Header'
import Button from './Button'

function Main() {
  return (
    <ThemeProvider>
        <Header/>
        <Button/>
    </ThemeProvider>
  )
}

export default Main
