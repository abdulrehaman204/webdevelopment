import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count > 0) {
      setMessage(`You clicked ${count} times!`);
    }
  }, [count]);

  useEffect(() => {
    if (name) {
      console.log("Name changed",name)
    }
  }, [name]); 

  return (
    <div className="container">
      <h1>NYB INFOTECH</h1>

      <div className="card">
        <input type="text" placeholder="Enter your username"
          value={name} onChange={handleChange} className="input"/>
       
        <p>Hello {name}</p>

        <button onClick={handleClick} className="btn">Click Me</button>

        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default App;
