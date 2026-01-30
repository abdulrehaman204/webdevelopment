import React, { useState } from 'react'
import Parent from './Parent'

function Child() {
    let a=100;
    let [b,c]=useState(1000)
    console.log(b)
    console.log(c)
    console.log(useState())
    function increase(){
        a++;
        console.log(a)
    }
    let inc=()=>{
        c(b+1);
    }
  return (
    <div>
        <Parent value={b}/>
        <button onClick={()=>{increase(a)}}>Increase</button>
        <button onClick={inc}>Click</button>
    </div>
  )
}

export default Child
