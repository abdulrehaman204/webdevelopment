import { useEffect, useState } from "react";
import "./MyComponent.css";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h2 className="title">Album List</h2>
      <div className="card-container">
        {data.map((item) => (
          <div key={item.id} className="card">
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyComponent;


