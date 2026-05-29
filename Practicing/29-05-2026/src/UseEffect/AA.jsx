import React, { useEffect, useState } from 'react'

function AA() {
    const[data,setdata]=useState([])
    const[loading,setloading]=useState(true)

    useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/albums")
     .then((response)=>response.json())
     .then((result)=>{
    setdata(result)
    setloading(false)
    })
    .catch((error)=>console.log(error))
    },[])
    if (loading) return <h2>Loading...</h2>
  return (
    <div>
      <h1>Albums List</h1>
     {data.map((item)=>(
        <div key={item.id}>
            <h2>UserId : {item.userId}</h2>
            <h2>Title : {item.title}</h2>
            </div>
     ))}
    </div>
  )
}

export default AA
