import React from 'react'
import { useEffect } from 'react'

function useDocument(count) {
      useEffect(()=>{
             document.title = `Count ${count}`
        },[count])
}

export default useDocument
