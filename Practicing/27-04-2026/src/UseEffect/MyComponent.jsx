import React, { useEffect, useState } from 'react'

function MyComponent() {
  const [data, setadata] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((result) => {
        setadata(result)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  if (loading) return <h2>Loading...</h2>

  return (
    <div>
      <h1>Albums List</h1>

      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h2>User ID: {item.userId}</h2>
            <h3>Title: {item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyComponent
