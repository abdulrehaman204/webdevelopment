import React, { useContext } from 'react'
import {context} from './AB'

function BC() {
    let[a,seta]=useContext(context)
  return (
    <div>
        <h1>Count : {a}</h1>
      <button onClick={()=>seta(a+1)}>click</button>
    </div>
  )
}

export default BC
