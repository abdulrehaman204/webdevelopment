import React from 'react'

function FruitList() {
    const fruits = ["Apple", "Banana", "Mango", "Orange"];
  return (
    <div>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((fruit,index)=>(
            <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default FruitList
