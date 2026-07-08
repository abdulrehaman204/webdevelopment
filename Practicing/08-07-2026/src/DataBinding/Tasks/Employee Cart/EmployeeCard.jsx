function EmployeeCard({ employee }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        width: "300px",
        marginBottom: "20px"
      }}
    >
      <h2>Employee Details</h2>

      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Salary:</strong> ₹{employee.salary}</p>
    </div>
  );
}

export default EmployeeCard;