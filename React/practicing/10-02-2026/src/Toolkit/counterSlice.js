import { createSlice } from "@reduxjs/toolkit";

const count=createSlice({
    name : "Abdul",
    initialState : { value : 10},
    reducers :{
        increment : (state,actions)=>{
              state.value += actions.payload;
        },
        decrement : (state,actions)=>{
            state.value -= actions.payload;
        }
    }
})

export default count.reducer
export const {increment,decrement}=count.actions

