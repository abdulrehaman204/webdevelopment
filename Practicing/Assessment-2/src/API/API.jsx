import React, { useState,useEffect } from 'react'

function API() {
    const[users,setusers]=useState([])
    const[loading,setloading]=useState(true)
    const[error,seterror]=useState(null)

    useEffect(()=>{
          const fetchuser=async()=>{
            try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            if(!response.ok){
             throw new Error("failed to fetch");
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
          fetchuser();
        },[])

        if(loading) return <p>Loading...</p>
        if(error) return <p>Error:{error}</p>
  return (
    <div>
      <h1>Users lists</h1>
      {users.map((e)=>(
        <div key={e.id}>
             <p><strong>{e.name}</strong></p>
            <p><strong>{e.email}</strong></p>
             <p><strong>{e.address.city}</strong></p>
             <button>Next</button>
             <button>Previous</button>
        </div>
      ))}
    </div>
  )
}

export default API
