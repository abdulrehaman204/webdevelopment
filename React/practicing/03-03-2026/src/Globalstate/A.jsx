import React, { createContext, useState } from 'react'
import B from './B'
import C from './C'
import D from './D'


export let context=createContext()

function A() {
    let[a,seta]=useState(100)


  return (
    <context.Provider value={{a,seta}}>
       <B/>
       <C/>
       <D/>
    </context.Provider>
  )
}

export default A

