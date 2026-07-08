import { useState } from "react";

function StudentForm() {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setStudent({
      ...student,
      [name]: value
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Registration</h2>

      <div>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <label>Age:</label>
        <br />
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <label>Course:</label>
        <br />
        <input
          type="text"
          name="course"
          value={student.course}
          onChange={handleChange}
        />
      </div>

      <hr />

      <h3>Student Details</h3>

      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Course:</strong> {student.course}</p>
    </div>
  );
}

export default StudentForm;