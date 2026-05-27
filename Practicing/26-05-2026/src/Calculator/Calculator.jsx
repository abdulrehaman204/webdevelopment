import React, { useState } from 'react'

function Calculator() {
    const[num1,setnum1]=useState("")
    const[num2,setnum2]=useState("")
    const[result,setresult]=useState(0)
  return (
    <div>
      <h1>Calculator</h1>
      <input type='number' placeholder='enter first number' 
      onChange={(e)=>setnum1(Number(e.target.value))}/>
      <br></br>
      <input type='number' placeholder='enter second number'
       onChange={(e)=>setnum2(Number(e.target.value))}/>
      <br></br>
       <button onClick={()=>setresult(num1+num2)}>Add</button>
        <button onClick={()=>setresult(num1-num2)}>Subtract</button>
         <button onClick={()=>setresult(num1*num2)}>Multiply</button>
          <button onClick={()=>setresult(num1/num2)}>Divide</button>
          <h1>Result : {result}</h1>
    </div>
  )
}

export default Calculator
