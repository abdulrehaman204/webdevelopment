import { connect } from 'react-redux'
import { createStore } from 'redux'


let initialstate={
    sum:100
}

function reducer(state=initialstate,actions){
    switch(actions.type){
        case "a" :
        return {...state,
                sum:state.sum+1
        }
        case "B" :
        return {...state,
            sum:state.sum-1

        }
        default :
        return state
    }

}


export let store=createStore(reducer)
