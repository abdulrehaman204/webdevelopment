import React from 'react'
import B from './B'

function A() {
    const car = {
    model: "Tesla",
    year: 2024,
    dealer: "ABC Motors",
    color : "red",
    }
  return (
    <div>
      <B mycar={car}/>
    </div>
  )
}

export default A
