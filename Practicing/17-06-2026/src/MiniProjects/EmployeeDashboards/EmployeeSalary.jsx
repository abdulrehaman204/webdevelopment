import React from "react";

function EmployeeSalary({ salary }) {
  return (
    <div>
      <h2>Salary Information</h2>

      <p>Salary: ₹{salary}</p>
    </div>
  );
}

export default EmployeeSalary;