import React, { useState, useEffect } from "react";

function Custom() {

  function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      setLoading(true);

      fetch(url)
        .then(res => res.json())
        .then(res => {
          setData(res);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }, [url]);

    return { data, loading, error };
  }


  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h2>Posts</h2>
      {data.slice(0, 5).map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}


export default Custom;


