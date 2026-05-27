import React, { useEffect, useState } from 'react'

function A(props) {
    let[data,setdata]=useState([])
    let[errors,seterrors]=usestate("")
    let fetchdata =()=>{
         fetch(props)
    .then((d)=>d.json)
    .then((d)=>setdata(d))
    .catch((e)=>seterrors(e))
    }

    useEffect(()=>{
        fetchdata()
    },[])
  return (
    {data,errors}
  )
}

export default A
