import React from 'react'
// import A from './Propsdestructing/A'
import B from './UseState/B'
import A from './dummy/A'

  const mycar={
  model : "maruthi",
  year : 2022,
  dealer : "Nixon",
  color : "red"
}


function App() {
  return (
    <div>
      {/* <A mycar={mycar}/>
      <B/> */}
      <A/>
    </div>
  )
}

export default App
