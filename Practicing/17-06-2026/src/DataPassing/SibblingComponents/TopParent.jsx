import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function TopParent() {
    let[message,setmessage]=useState("")
  return (
    <div>
      <ChildA setmessage={setmessage}/>
      <ChildB message={message}/>
    </div>
  )
}

export default TopParent
