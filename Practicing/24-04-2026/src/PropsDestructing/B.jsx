import React from 'react'
import A from './A'

function B() {
    const car = {
    model: "Tesla",
    year: 2024,
    dealer: "ABC Motors",
    color: "Red"
    }
  return (
    <div>
      <A mycar={car}/>
    </div>
  )
}

export default B
