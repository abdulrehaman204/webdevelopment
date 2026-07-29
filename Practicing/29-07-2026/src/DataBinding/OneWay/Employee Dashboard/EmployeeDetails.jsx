import React from 'react'
import EmployeeCard from './EmployeeCard'

function EmployeeDetails() {
    const employee={
    id: 101,
    name: "Abdul",
    department: "IT",
    salary: 65000,
    designation: "Software Engineer"
    }
  return (
    <div>
      <EmployeeCard employee={employee}/>
    </div>
  )
}

export default EmployeeDetails
