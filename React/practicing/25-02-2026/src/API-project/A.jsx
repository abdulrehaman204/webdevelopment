import React from "react";
import axios from "axios";

function App() {

    
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
    <div style={{ textAlign: "center", padding: "20px" }}>
      
      <h1>Rohit Sharma</h1>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg/500px-Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg"
        alt="Rohit Sharma"
        width="250"
        style={{ borderRadius: "10px" }}
      />

      <p><strong>Full Name:</strong> Rohit Gurunath Sharma</p>
      <p><strong>Born:</strong> 30 April 1987</p>
      <p><strong>Birthplace:</strong> Nagpur, India</p>
      <p><strong>Role:</strong> Opening Batter</p>
      <p><strong>Batting Style:</strong> Right-handed</p>

      <button onClick={handleGet} style={{ margin: "10px" }}>
        GET Data
      </button>

      <button onClick={handlePost}>
        POST Data
      </button>

    </div>
  );
}

export default App;