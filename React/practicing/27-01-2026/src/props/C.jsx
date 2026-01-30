import React from 'react'

function C(props) {
    let k=1000;
    console.log(props)
    props.value(k)
  return (
    <div>
      <h1>This is c component</h1>
      {/* <h1>data from A is : {props.value}</h1> */}
    </div>
  )
}

export default C
