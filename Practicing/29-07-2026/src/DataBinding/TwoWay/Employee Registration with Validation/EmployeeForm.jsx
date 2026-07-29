import React, { useState } from "react";

function EmployeeForm() {
  const [emp, setEmp] = useState({
    name: "",
    email: "",
    age: "",
    salary: ""
  });

  const handleChange = (e) => {
    setEmp({
      ...emp,
      [e.target.name]: e.target.value
    });
  };

  const nameValid = emp.name.trim() !== "";
  const emailValid = emp.email.includes("@");
  const ageValid = Number(emp.age) >= 18;
  const salaryValid = Number(emp.salary) > 0;

  const isValid =
    nameValid &&
    emailValid &&
    ageValid &&
    salaryValid;

  return (
    <div>
      <input
        name="name"
        placeholder="Name"
        value={emp.name}
        onChange={handleChange}
      />
      {!nameValid && <p>Name is required</p>}

      <br />

      <input
        name="email"
        placeholder="Email"
        value={emp.email}
        onChange={handleChange}
      />
      {!emailValid && <p>Invalid email</p>}

      <br />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={emp.age}
        onChange={handleChange}
      />
      {!ageValid && <p>Age must be at least 18</p>}

      <br />

      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={emp.salary}
        onChange={handleChange}
      />
      {!salaryValid && <p>Salary must be greater than 0</p>}

      <hr />

      {isValid && (
        <div>
          <h3>Employee Details</h3>
          <p>Name: {emp.name}</p>
          <p>Email: {emp.email}</p>
          <p>Age: {emp.age}</p>
          <p>Salary: ${emp.salary}</p>
        </div>
      )}
    </div>
  );
}

export default EmployeeForm;
