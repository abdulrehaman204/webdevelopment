import React, { createContext, useState } from 'react'
import BC from './BC'

export let context=createContext()
function AB() {
    let[a,seta]=useState(100)
  return (
    <div>
      <context.Provider value={[a,seta]}>
        <BC/>
      </context.Provider>
    </div>
  )
}

export default AB
