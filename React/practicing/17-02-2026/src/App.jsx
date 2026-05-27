import React, { useState } from 'react'
import A from './Layout/Higherordercomponents/A'
import B from './Layout/Higherordercomponents/B'
import Header from './Layout/Higherordercomponents/Header'
import Footer from './Layout/Higherordercomponents/Footer'
import Layout from './Layout/Higherordercomponents/Layout'
import Doctitleone from './CustomHook1/Doctitleone'
import Doctitletwo from './CustomHook1/Doctitletwo'

function App() {
  let[state,setstate]=useState(true)
  return (
    <div>
       <button style={{color:"blue",background:"yellow"}}onClick={()=>setstate(!state)}>Click</button>
       <Layout value={A}/>
       <Header/>
    {state?  <A/> : <B/> }
       <Footer/>
       {/* <Doctitleone/>
       <Doctitletwo/> */}
    </div>
  )
}

export default App

