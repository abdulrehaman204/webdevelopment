import React, { useState } from "react";

function EmployeeForm({ setEmployee }) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmployee({
      name,
      department,
      salary,
    });

    setName("");
    setDepartment("");
    setSalary("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <br /><br />

      <button type="submit">
        Add Employee
      </button>
    </form>
  );
}

export default EmployeeForm;