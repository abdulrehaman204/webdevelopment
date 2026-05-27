import { createStore } from "redux";

const initialState={
    count : 0
}

function reducer(state=initialState,action){
    switch(action.type){
        case 'Increment' :
        console.log(action.payload)
        return {...state,
            count:state.count + action.payload}
        case 'Decrement' :
        console.log(action.payload)
        return {...state,
            count:state.count - action.payload}
        default :
        return state ;
    }
}



export let store = createStore(reducer)