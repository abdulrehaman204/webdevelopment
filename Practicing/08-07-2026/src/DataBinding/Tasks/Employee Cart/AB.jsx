import { useState } from "react";
import EmployeeCard from "./EmployeeCard";

function AB() {
  const [employee, setEmployee] = useState({
    id: 101,
    name: "Abdul Rehaman",
    department: "IT",
    salary: 50000
  });

  const updateSalary = () => {
    setEmployee({
      ...employee,
      salary: 60000
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <EmployeeCard employee={employee} />

      <button onClick={updateSalary}>
        Update Salary
      </button>
    </div>
  );
}

export default AB;