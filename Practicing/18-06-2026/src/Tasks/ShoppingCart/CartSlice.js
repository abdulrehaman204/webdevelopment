import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    items : [],
}

const cartslice = createSlice({
    name : "cart",
    initialState,
    reducers :{
        addtocart : (state,action)=>{
            state.items.push(action.payload)
        },
        removefromcart : (state,action)=>{
            state.items = state.items.filter((item)=>item.id == ! action.payload)
        },
        clearCart: (state) => {
            state.items = [];
    },
    }
})

export const {addtocart,removefromcart,clearCart}=cartslice.actions
export default cartslice.reducer