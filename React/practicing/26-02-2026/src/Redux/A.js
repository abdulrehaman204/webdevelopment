import {createStore} from 'redux'

let initialstate = {
        count : 0 
    }
  
function reducer(state=initialstate,actions){
     switch(actions.type)
     {
        case "increment":
        return {count : state.count + 1}
        case "decrement" :
        return { count : state.count - 1}
        default :
        return state

     }
}


export let store = createStore(reducer)
