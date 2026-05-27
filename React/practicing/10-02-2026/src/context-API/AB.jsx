import { createContext} from 'react'
import {useSelector,useDispatch} from 'react-redux'


export const context=createContext()

function AB() {
    const data=useSelector((state)=> state)
    const d=useDispatch()
  return (
    <div>
      <h1>count : {data.sum}</h1>
      <button onClick={()=>d({type : 'a'})}>Increase</button>
      <button onClick={()=>d({type : 'B'})}>decrease</button>
    </div>
  )
}

export default AB
