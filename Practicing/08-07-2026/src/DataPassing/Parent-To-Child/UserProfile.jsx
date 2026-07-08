import React from 'react'

function UserProfile({ name, age, email }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "20px",
        width: "300px",
      }}
    >
      <h2>User Profile</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Age:</strong> {age}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>
    </div>
  );
}

export default UserProfile;
