import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeSalary from "./EmployeeSalary";

function AA() {
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: "",
  });

  return (
    <div>
      <h1>Employee Dashboard</h1>

      <EmployeeForm setEmployee={setEmployee} />

      <EmployeeDetails employee={employee} />

      <EmployeeSalary salary={employee.salary} />
    </div>
  );
}

export default AA;