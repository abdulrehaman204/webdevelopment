import { useEffect, useState } from "react";

export default function API() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed request");
        return res.json();
      })
      .then(setUsers)
      .catch(() => setError("Error fetching data"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </>
  );
}
