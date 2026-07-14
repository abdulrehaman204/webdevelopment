import React from 'react'

function StudentList() {
    const students = [
    { id: 1, name: "Alice", course: "React" },
    { id: 2, name: "Bob", course: "JavaScript" },
    { id: 3, name: "Charlie", course: "Node.js" }
  ];
  return (
    <div>
      <h1>Students List</h1>
      <ul>
        {students.map((student)=>(
            <li key={student.id}>
                Name : {student.name} | Course : {student.course}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default StudentList
