import React, { useEffect,useState } from 'react'

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

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error{error}</h1>
  return (
    <div>
      <h1>Users lists</h1>
      {users.map((e)=>(
        <div key={e.id}>
         <p><strong>Name:</strong> {e.name}</p>
          <p><strong>Email:</strong> {e.email}</p>
          <p><strong>City:</strong> {e.address.city}</p>
        </div>
      ))}
    </div>
  )
}

export default API
