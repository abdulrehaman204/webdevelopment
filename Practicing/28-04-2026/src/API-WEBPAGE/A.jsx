import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function A() {
  const [showDetails, setShowDetails] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [message, setMessage] = useState("");

  const handleGet = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setApiData(res.data);   
        setMessage("GET All Posts Success!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        name: "Rohit Sharma",
        role: "Indian Cricketer",
      })
      .then((res) => {
        setApiData([res.data]); 
        console.log(res.data)
        setMessage("POST Success!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePut = () => {
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", {
        id: 1,
        title: "Updated Title (PUT)",
        body: "This is full update",
        userId: 1,
      })
      .then((res) => {
        setApiData([res.data]);
        console.log(res.data)
        setMessage("PUT Success!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePatch = () => {
    axios
      .patch("https://jsonplaceholder.typicode.com/posts/1", {
        title: "Updated Title (PATCH)",
      })
      .then((res) => {
        setApiData([res.data]);
        console.log(res.data)
        setMessage("PATCH Success!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/1")
      .then(() => {
        setApiData([]);
        setMessage("DELETE Success! Post Removed.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg/500px-Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg"
          alt="Rohit Sharma"
          className="profile-img"
        />

        <h1>Rohit Sharma</h1>

        <p className="short-info">
          Indian international cricketer and captain. Known as the "Hitman"
          for his explosive batting.
        </p>

        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Full Details" : "Show Full Details"}
        </button>

        <button onClick={handleGet} style={{ margin: "10px" }}>
          GET Data
        </button>

        <button onClick={handlePost}>POST Data</button>

        <button onClick={handlePut} style={{ margin: "10px" }}>
          PUT Data
        </button>

        <button onClick={handlePatch}>PATCH Data</button>

        <button onClick={handleDelete} style={{ margin: "10px" }}>
          DELETE Data
        </button>

        {message && <p style={{ color: "green" }}>{message}</p>}

        {apiData.length > 0 && (
          <div className="details">
            <h2>API Response</h2>

            {apiData.map((post) => (
              <div
                key={post.id}
                style={{
                  borderBottom: "1px solid #ccc",
                  marginBottom: "10px",
                  paddingBottom: "10px",
                }}
              >
                <p><strong>ID:</strong> {post.id}</p>
                <p><strong>Title:</strong> {post.title}</p>
                <p><strong>Body:</strong> {post.body}</p>
                <p><strong>User ID:</strong> {post.userId}</p>
                <p><strong>Name:</strong> {post.name}</p>
                <p><strong>Role:</strong> {post.role}</p>
              </div>
            ))}

          </div>
        )}

        {showDetails && (
          <div className="details">
            <h2>Personal Details</h2>
            <ul>
              <li><strong>Full Name:</strong> Rohit Gurunath Sharma</li>
              <li><strong>Born:</strong> 30 April 1987</li>
              <li><strong>Birthplace:</strong> Nagpur, India</li>
              <li><strong>Batting Style:</strong> Right-handed</li>
              <li><strong>Role:</strong> Opening Batter</li>
            </ul>

            <h2>Career Highlights</h2>
            <ul>
              <li>Highest ODI Score: 264</li>
              <li>3 Double Centuries in ODIs</li>
              <li>Multiple ICC tournament wins</li>
              <li>Former Captain of Mumbai Indians (IPL)</li>
            </ul>

            <h2>Career Stats (Approx.)</h2>
            <ul>
              <li>ODI Runs: 10,000+</li>
              <li>Test Runs: 3,500+</li>
              <li>T20I Runs: 4,000+</li>
              <li>International Centuries: 45+</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default A;