import { createSlice } from "@reduxjs/toolkit";
const initialState={
   cart:[]
}
const cart=createSlice({
   name:'cart',
   initialState,
   reducers:{
      addToCart:(state,action)=>{
         state.cart=[
            action.payload,
            ...state.cart
         ]
      }
   }
})
export const {addToCart} = cart.actions
export default cart.reducer