import React, { createContext, useState } from 'react'
import B from './B'
import C from './C'

export let context=createContext()
function A() {
  let [a,seta]=useState(100)
  return (
    <div>
      A
      <context.Provider value={{a,seta}}>
      <B/>
      <C/>
      </context.Provider>
    </div>
  )
}

export default A
