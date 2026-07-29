import React from 'react'

function Employee({employee}) {
  return (
    <div>
       <h2>Employee Component</h2>
      <p>Name: {employee.name}</p>
      <p>Department: {employee.department}</p>
      <p>Salary: ${employee.salary}</p>
    </div>
  )
}

export default Employee
