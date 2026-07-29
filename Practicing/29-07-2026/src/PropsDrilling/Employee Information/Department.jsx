import React from 'react'
import Employee from './Employee'

function Department({employee}) {
  return (
    <div>
        <h2>Department Component</h2>
      <Employee employee={employee}/>
    </div>
  )
}

export default Department
