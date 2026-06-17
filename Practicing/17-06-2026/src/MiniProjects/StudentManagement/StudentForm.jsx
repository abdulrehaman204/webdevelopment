import React, { useState } from "react";

function StudentForm({ setStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setStudent({
      name,
      course,
    });

    setName("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <br /><br />

      <button type="submit">
        Submit
      </button>
        <br /><br />
    </form>
  );
}

export default StudentForm;
