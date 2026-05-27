import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({value}) {
    console.log(value)
  return (
    <div>
      <Header/>
      <Footer/>
    </div>
  )
}

export default Layout
