import React, { useEffect, useState } from "react";
import axios from "axios";
import "./A.css";

function A() {
  const [data, setData] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  // GET METHOD
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // POST METHOD
  const addAlbum = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/albums", {
        title: newTitle,
        userId: 1,
      })
      .then((response) => {
        setData([...data, response.data]);
        setNewTitle("");
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // PATCH METHOD
  const updateAlbum = (id) => {
    axios
      .patch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        title: "Updated Title",
      })
      .then((response) => {
        const updatedData = data.map((item) =>
          item.id === id ? { ...item, title: response.data.title } : item
        );
        setData(updatedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // DELETE METHOD
  const deleteAlbum = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then(() => {
        const filteredData = data.filter((item) => item.id !== id);
        setData(filteredData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1 className="title">The Albums List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter album title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button className="add-btn" onClick={addAlbum}>Post Album</button>
      </div>

      {data.slice(0, 10).map((album) => (
        <div className="album-card" key={album.id}>
          <p>{album.title}</p>
          <div className="btn-group">
        <button className="update-btn"
              onClick={() => updateAlbum(album.id)}>Update</button>
        <button className="delete-btn"
              onClick={() => deleteAlbum(album.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default A;