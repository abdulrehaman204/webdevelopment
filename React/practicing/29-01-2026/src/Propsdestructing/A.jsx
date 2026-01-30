import React from 'react'

const A = (props) => {
  const{model, year, dealer, color}=props.mycar
  return (
    <div>
      <h1>{model}</h1>
      <h1>{year}</h1>
      <h1>{dealer}</h1>
      <h1>{color}</h1>
    </div>
  )
}

export default A

