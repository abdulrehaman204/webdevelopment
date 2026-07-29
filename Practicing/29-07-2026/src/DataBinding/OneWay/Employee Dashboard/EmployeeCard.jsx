import React from 'react'

function EmployeeCard({employee}) {
  return (
    <div>
      <h1>Employee Details</h1>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Department: {employee.department}</p>
      <p>Salary: ${employee.salary}</p>
      <p>Designation: {employee.designation}</p>
    </div>
  )
}

export default EmployeeCard
