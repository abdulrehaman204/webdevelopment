import React, { useState } from 'react'

function UserProfile() {
    const[showprofile,setshowprofile]=useState(false)
  return (
    <div>
      <button onClick={()=>setshowprofile(!showprofile)}>
        {showprofile ? "Hide profile" : "Show profile"}
      </button>
      {showprofile&&(
        <div>
            <h1>Name : AbdulRehaman</h1>
            <p>Gmail : Abdul@gmail.com</p>
        </div>
      )}
    </div>
  )
}

export default UserProfile
