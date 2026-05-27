import React, { useState } from 'react'

function Search() {
    const names=["Abdul","Rehaman","razzak","Hello"]
    const[query,setquery]=useState("");
    const filtered = names.filter((n)=>
        n.toLowerCase().includes(query.toLowerCase())
    )
  return (
    <div>
        <input onChange={(e)=>setquery(e.target.value)}/>
        {filtered.length>0?(
      filtered.map((name,i)=>(
        <p key={i}>{name}</p>
      ))
    ) : (<p>No result found</p>
      )}
    </div>
  )
}

export default Search
