import React from 'react'
import Department from './Department'

function Company({employee}) {
  return (
    <div>
        <h2>Company Component</h2>
      <Department employee={employee}/>
    </div>
  )
}

export default Company
