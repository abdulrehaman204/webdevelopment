function StudentList() {
  const students = [
    { id: 1, name: "Ravi" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Kiran" }
  ];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;