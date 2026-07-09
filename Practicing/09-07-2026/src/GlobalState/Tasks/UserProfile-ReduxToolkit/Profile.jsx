import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearProfile, updateProfile } from './userSlice';

function Profile() {
    const user = useSelector((state)=>state.user)
    const dispatch = useDispatch()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

    const handleUpdate = () => {
    dispatch(updateProfile({name,email,}));
    setName("");
    setEmail("");
  };
  return (
    <div style={{ padding: "20px" }}>
       <h2>User Profile</h2>

      <p>Name: {user.name || "Not Set"}</p>
      <p>Email: {user.email || "Not Set"}</p>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleUpdate}>Update Profile</button>

      <button onClick={() => dispatch(clearProfile())} style={{ marginLeft: "10px" }}>
        Clear Profile
      </button>
    </div>
  )
}

export default Profile
