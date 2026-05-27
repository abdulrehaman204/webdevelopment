import React, { useEffect, useState } from 'react'

function API() {
    const[users,setusers]=useState([])
    const[loading,setloading]=useState(true)
    const[error,seterror]=useState(null)

    useEffect(()=>{
       const fetchuser = async() =>{
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            if(!response.ok){
                throw new Error("Failed to Fetch");
            }
            const data = await response.json()
            setusers(data)
        }
        catch(err){
            seterror(err.message)
        }
        finally{
            setloading(false)
        }
       }
       fetchuser()
    },[])

    if(loading) return <h2>Loading...</h2>
    if(error) return <h2>Error:{error}</h2>
  return (
    <div>
        <h2>Users List</h2>
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

export default API
