import React from 'react'

function List() {
    const fruits=["Apple","Mango","Banana","Orange"]
  return (
    <div>
      {fruits.map((fruit,index)=>(
        <div key={index}>
         {fruit}
        </div>
      ))}
    </div>
  )
}

export default List
