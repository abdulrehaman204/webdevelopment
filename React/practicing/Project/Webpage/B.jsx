import React, { useState } from "react";
import "./App.css";

function App() {
  const [showDetails, setShowDetails] = useState(false);

    const handleGet = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        alert("GET Success! Check console");
        console.log(res.data);
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
        alert("POST Success! Check console");
        console.log(res.data);
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

      <button onClick={handlePost}>
        POST Data
      </button>

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

export default App;