import React, { useState } from "react";

function StudentResult() {
  const [student, setStudent] = useState({
    name: "",
    s1: "",
    s2: "",
    s3: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const total =
    Number(student.s1) +
    Number(student.s2) +
    Number(student.s3);

  const average = total / 3 || 0;

  let grade = "C";

  if (average >= 90) grade = "A+";
  else if (average >= 75) grade = "A";
  else if (average >= 60) grade = "B";

  return (
    <div>
      <input
        name="name"
        placeholder="Student Name"
        value={student.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="s1"
        type="number"
        placeholder="Subject 1"
        value={student.s1}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="s2"
        type="number"
        placeholder="Subject 2"
        value={student.s2}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="s3"
        type="number"
        placeholder="Subject 3"
        value={student.s3}
        onChange={handleChange}
      />

      <hr />

      <h3>{student.name}</h3>
      <p>Total : {total}</p>
      <p>Average : {average.toFixed(2)}</p>
      <p>Grade : {grade}</p>
    </div>
  );
}

export default StudentResult;

