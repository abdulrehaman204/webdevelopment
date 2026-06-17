import React, { useState } from 'react'

function Twoway() {
    const[city,setcity]=useState("")
  return (
    <div>
      <select
      value={city}
      onChange={(e)=>setcity(e.target.value)}
      >
   <option value="">Select City</option>
  <option value="Hyderabad">Hyderabad</option>
  <option value="Delhi">Delhi</option>
  <option value="Mumbai">Mumbai</option>
      </select>
    </div>
  )
}

export default Twoway
