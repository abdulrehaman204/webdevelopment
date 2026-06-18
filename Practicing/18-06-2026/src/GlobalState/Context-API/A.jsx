import React, { createContext, useState } from 'react'
import B from './B'

export const MyContext = createContext()

function A() {
    let[a,seta]=useState(100)
  return (
  <MyContext.Provider value={{a,seta}}>
  <B/>
  </MyContext.Provider>
  )
}

export default A
