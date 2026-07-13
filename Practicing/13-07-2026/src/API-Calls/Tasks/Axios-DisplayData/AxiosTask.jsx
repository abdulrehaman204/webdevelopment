import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AxiosTask() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=>{
     axios
     .get("https://jsonplaceholder.typicode.com/posts")
     .then((response)=>{
        setPosts(response.data);
        setLoading(false);
     })
     .catch((err)=>{
        setError(err.message);
        setLoading(false)
     })
    },[])

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  return (
    <div>
      <h2>Posts</h2>
      {posts.slice(0, 10).map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default AxiosTask
