import React, { useEffect, useState } from 'react'

function A() {
    let[a,seta]=useState([])
    useEffect(()=>{
       console.log(a)
    },[a])
    useEffect(()=>{
        console.log("hello")
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((d)=>d.json())
        .then((d)=>
            // console.log(d))
        //   console.log(Array.isArray(d)))
        seta(d))
        
    },[])
    console.log(a[0])
    console.log(a[0])
  return (
    <div>
        {/* <h1>{a[0]?.id}</h1>
        <h1>{a[0]?.userId}</h1>
        <h1>{a[0]?.title}</h1> */}
        {a.map((b)=>{
           return (<div key={b.id}> 
                <h1>{b.id}</h1>
                <h1>{b.userId}</h1>
                <h1>{b.title}</h1>
                </div>)
        })}
      <button onClick={()=>seta(a+1)}>Change</button>
    </div>
  )
}

export default A
