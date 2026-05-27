import {createStore} from 'redux'

let initialstate = {
    sum : 0
}


function reducer(state=initialstate,actions){
    switch(actions.type){
       case "a" :
        return {...state,
            sum:state.sum+1
        }
        case "b" :
            return {...state,
             sum:state.sum-1
            }
        default :
        return state
    }
}

export let store =createStore(reducer)