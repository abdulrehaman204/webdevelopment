import React, { useRef, useState } from 'react'

function FormValidation() {
    const nameRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

   function handleSubmit() {
    if (name.trim() === "") {
      nameRef.current.focus();
      setMessage("Name is required");
      return;
    }

    setMessage("Form Submitted Successfully");
  }
  return (
    <div>
      <input
      placeholder='Enter your name'
      value={name}
      ref={nameRef}
      onChange={(e) => setName(e.target.value)}
      />
      <br/><br/>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
       <button onClick={handleSubmit}>Submit</button>
      <h3>{message}</h3>
      <br /><br />
    </div>
  )
}

export default FormValidation
