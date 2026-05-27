import React from 'react'

const C = React.memo (({value}) => {
    console.log("rendering count")
    
  return (
    <button onClick={value}>UseCallback</button>
    
  )
})

export default C
