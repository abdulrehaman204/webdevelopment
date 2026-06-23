import React, { useEffect, useState } from 'react'

function Fetch() {
    const[users,setusers]=useState([])
    const[loading,setloading]=useState(true)
    const[error,seterror]=useState("")
    useEffect(()=>{
        const fetchdata = async()=>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if(!response.ok){
                    throw new Error("failed to fetch");
                }
                const data = await response.json();
                setusers(data)
            }
            catch(err){
               seterror(err.message)
            }
            finally{
                setloading(false)
            }
        }
        fetchdata()
    },[])
    if(error) return <h1>Error {error}</h1>
    if(loading) return <h1>Loading...</h1>
  return (
    <div>
      <h1>Users list</h1>
      {users.map((user)=>
    <div key={user.id}>
     <p><strong>Name:</strong> {user.name}</p>
    <p><strong>Email:</strong> {user.email}</p>
     <p><strong>City:</strong> {user.address.city}</p>
    </div>)}
    </div>
  )
}

export default Fetch
