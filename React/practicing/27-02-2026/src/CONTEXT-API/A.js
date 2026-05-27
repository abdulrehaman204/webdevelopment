import {createStore} from 'redux'


let initialState={
    sum : 100
}

function reducer(state=initialState,action){
    switch(action.type){
       case "Increment" :
        return {
            ...state, sum:state.sum + 1
        }
        case "Decrement" :
            return {
                ...state, sum : state.sum - 1
            }
        default :
        return state
        
    }
}


export let store=createStore(reducer)