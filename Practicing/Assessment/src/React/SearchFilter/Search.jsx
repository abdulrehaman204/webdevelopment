import React, { useState } from 'react'

function Search() {
    const[search,setsearch]=useState("")

    const users = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "David Williams",
    "Emma Watson",
    "Frank Miller",
    "Grace Lee"
  ];

  const filtered = users.filter(user=>
    user.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>Users list</h1>
      <input
        type='text'
        placeholder='eneter user'
        value={search}
        onChange={(e)=>setsearch(e.target.value)}
      />
      <ul>
        {filtered.length>0 ?(
            filtered.map((user,index)=>(
                <li key={index}>{user}</li>
            ))
        ) : (
             <p>No users found</p>
        )
    }
      </ul>
    </div>
  )
}

export default Search
