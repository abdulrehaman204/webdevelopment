import React from 'react'

function Event() {
     const handleDelete = (id) => {
    console.log("Deleting user:", id);
  };
  return (
    <div>
    <button onClick={() => handleDelete(1)}>
      Delete User
    </button>
    </div>
  )
}

export default Event
