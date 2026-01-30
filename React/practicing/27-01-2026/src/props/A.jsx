import React from 'react'
import B from './B';
import C from './C';

function A() {
    let a=10;
    let b={age:23}
    console.log(a,b)

    function hai(k){
      console.log(k)
    }
    hai(1)

  return (
    <div>
      <h1>value of a is : {a}</h1>
      <h1>{b.age}</h1>
      <B value={a}/>
      <C value={hai}/>
    </div>
  )
}

export default A
