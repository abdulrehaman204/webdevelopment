import React, { useEffect, useState } from 'react'
import axios from "axios"

function A() {
    const [data,setdata]=useState([])

    useEffect(()=>{ axios
        .get("https://jsonplaceholder.typicode.com/albums")
        .then((response)=>{
            setdata(response.data)
          })
        .catch((error)=>{
            console.log(error)
        }),[]})


    const addAlbum = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/albums", {
        title: abdul,
        userId: 1,
      })
      .then((response) => {
        setdata([...data, response.data]);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>The Albums List </h1>
           <input
        type="text"
        placeholder="Enter album title"
      />
      <button onClick={addAlbum}>Add Album</button>
      {data.map((users) => (
        <p key={users.id}>{users.title}</p>
      ))}
    </div>
  )
}

export default A
