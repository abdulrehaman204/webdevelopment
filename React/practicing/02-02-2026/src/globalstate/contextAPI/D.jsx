import React, { useContext } from 'react'
import G from './G'
import H from './H'
import { context } from './A'


function D() {
  let {a,seta}=useContext(context)
  return (
    <div>
     D
     <h1>The value in D is {a} 😄</h1>
     <button onClick={()=>{seta(a+1)}}>Click</button>
      <G/>
      <H/>
    </div>
  )
}

export default D
