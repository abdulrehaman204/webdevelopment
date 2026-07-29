import React from 'react'

function Students(props) {
  return (
    <div>
      <h2>Child StudentComponent</h2>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
    </div>
  )
}

export default Students
