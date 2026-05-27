import React from 'react'


function List() {
    const list=["abdul","rehaman","razzak"]
  return (
    <div>
      <h1>List rendering</h1>
     <ul> {list.map((lists,index)=>
        <li key={index}>{lists}</li>
      )}
      </ul>
    </div>
  )
}

export default List
