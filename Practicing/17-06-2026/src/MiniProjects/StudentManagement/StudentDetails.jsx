import React from "react";

function StudentDetails({ student }) {
  return (
    <div>
      <h2>Student Details</h2>

      <p>Name: {student.name}</p>

      <p>Course: {student.course}</p>
    </div>
  );
}

export default StudentDetails;
