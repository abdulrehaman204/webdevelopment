import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentDetails from "./StudentDetails";

function AB() {
  const [student, setStudent] = useState({
    name: "",
    course: "",
  });

  return (
    <div>
      <h1>Student Management System</h1>

      <StudentForm setStudent={setStudent} />

      <StudentDetails student={student} />
    </div>
  );
}

export default AB;
