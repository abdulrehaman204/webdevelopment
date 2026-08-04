import { useEffect, useState } from "react";

function A() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const usersRes = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await usersRes.json();

        const filteredUsers = users.filter((user) =>
          user.company.name.includes("Group")
        );

        const result = await Promise.all(
          filteredUsers.map(async (user) => {
            try {
              const postsRes = await fetch(
                `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
              );
              const posts = await postsRes.json();

              const longestTitle = posts.reduce(
                (a, b) =>
                  a.title.length > b.title.length ? a : b,
                { title: "" }
              );

              return {
                name: user.name,
                company: user.company.name,
                totalPosts: posts.length,
                longestTitle: longestTitle.title,
              };
            } catch {
              return {
                name: user.name,
                company: user.company.name,
                totalPosts: 0,
                longestTitle: "Failed to load",
              };
            }
          })
        );

        setData(result);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      {data.map((user) => (
        <div key={user.name}>
          <h3>{user.name}</h3>
          <p>Company: {user.company}</p>
          <p>Total Posts: {user.totalPosts}</p>
          <p>Longest Title: {user.longestTitle}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}


export default A;