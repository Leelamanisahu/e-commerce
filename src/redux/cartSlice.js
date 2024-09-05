import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action)=>{
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
        },
        increaseCount:(state,action)=>{
            const cartItem = state.cart.find(item => item.id === action.payload.id);
            if (cartItem) {
              cartItem.count += 1;
            }
        },
        decreaseCount:(state,action)=>{
            const cartItem = state.cart.find(item => item.id === action.payload.id);
            if (cartItem && cartItem.count > 1) {
              cartItem.count -= 1;
            } else if (cartItem && cartItem.count === 1) {
              state.cart = state.cart.filter(item => item.id !== action.payload.id);
            }
        },
        removeCart:(state,action)=>{
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        }
    }
})

export const {addToCart,increaseCount,decreaseCount,removeCart} = cartSlice.actions;

export default cartSlice.reducer;