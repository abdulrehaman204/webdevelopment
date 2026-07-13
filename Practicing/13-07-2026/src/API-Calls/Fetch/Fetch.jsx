import React, { useState } from 'react'

function Fetch() {
    const[post,setpost]=useState([])

    // GET
    let GetPost = () =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>{
            setpost(data);
        })
        .catch((err)=>console.log(err))
    }

    // POST
    let handleAdd = () =>{
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({
                 title: "New Post",
                 body: "This is the new post body",
                 userId: 1,
            })
        })
        .then((res) => res.json())
        .then((data) => {
        setpost([data, ...post]);
         })
        .catch((error) => console.log(error));
    }

     // PUT
  let handlePut = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
 
      body: JSON.stringify({
        id: 1,
        title: "update title",
        body: "Updated body",
        userId: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setpost(post.map((item) => (item.id === 1 ? data : item)));
      })
      .catch((error) => console.log(error));
  };
 
  // PATCH
  let handlePatch = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
 
      body: JSON.stringify({
        title: "patched title",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setpost(
          post.map((item) =>
            item.id === 1 ? { ...item, ...data } : item
          )
        );
      })
      .catch((error) => console.log(error));
  };
 
  // DELETE
  let handleDelete = (id) => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then(() => {
        setpost(post.filter((item) => item.id !== id));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>API Calls using fetch</h1>

      <button onClick={GetPost}>Get</button>
      <button onClick={handleAdd}>Post</button>
      <button onClick={handlePut}>Put</button>
      <button onClick={handlePatch}>Patch</button>

      {post.map((item)=>(
        <div key={item.id}
          style={{
            border: "2px solid black",
            margin: "10px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h2>ID: {item.id}</h2>
          <h3>Title: {item.title}</h3>
          <p>Body: {item.body}</p>
          <button onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Fetch
