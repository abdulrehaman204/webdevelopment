import React, { useState } from 'react'

function Parent(props) {
    console.log(props)
    let [a,b]=useState(90)
    console.log(useState())
    function increase(){
        b(a+1)
    }
  return (
    <div>
      {props.value}
      <button onClick={increase}>Increase parent{a}</button>
    </div>
  )
}

export default Parent
