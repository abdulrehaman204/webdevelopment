import React, { useEffect, useState } from 'react'

function Fetch() {
    const[users,setusers]=useState([])
    const[loading,setloading]=useState(true)
    const[error,seterror]=useState("")

    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{
        if(!response.ok){
            throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data)=>{
        setusers(data)
        setloading(false)
      })
      .catch((err)=>{
        seterror(err.message)
        setloading(false)
      })
    },[])

    if(loading) return <h2>Loading....</h2>
    if(error) return <h2>Error:{error}</h2>
    return (
    <div>
      <h1>Fetching user data</h1>
      {users.map((user)=>(
        <div key={user.id}>
    <p><strong>Name:</strong> {user.name}</p>
    <p><strong>Email:</strong> {user.email}</p>
     <p><strong>City:</strong> {user.address.city}</p>
        </div>
      ))}
    </div>
  )
}

export default Fetch
