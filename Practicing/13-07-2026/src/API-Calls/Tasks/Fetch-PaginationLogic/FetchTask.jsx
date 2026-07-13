import React, { useEffect, useState } from 'react'

function FetchTask() {
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        if(!response.ok){
            throw new Error("Failed to fetch the Data");
        }
        return response.json();
    })
    .then((data)=>{
        setPosts(data);
        setLoading(false);
    })
    .catch((err)=>{
        setError(err.message)
        setLoading(false)
    })
},[])

const lastIndex = currentPage * itemsPerPage;
const firstIndex = lastIndex - itemsPerPage;
const currentPosts = posts.slice(firstIndex, lastIndex);
const totalPages = Math.ceil(posts.length / itemsPerPage);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts List</h2>

      {loading && <h3>Loading...</h3>}

      {error && <h3 style={{ color: "red" }}>{error}</h3>}

      {!loading &&
        !error &&
        currentPosts.map((post) => (
          <div key={post.id}
            style={{
              border: "1px solid gray",
              margin: "10px 0",
              padding: "10px",
            }}
          >
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}

      {!loading && !error && (
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >Previous
          </button>

          <span style={{ margin: "0 15px" }}>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default FetchTask
