import React from 'react'
import Company from './Company';

function A() {
    const employee = {
    name: "Rahul",
    department: "IT",
    salary: 75000,
  };
  return (
    <div>
      <h2>Parent Component</h2>
      <Company employee={employee}/>
    </div>
  )
}

export default A
