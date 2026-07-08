function UserCard({ user }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        width: "300px",
      }}
    >
      <h3>User Card</h3>

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Age:</strong> {user.age}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}

export default UserCard;
