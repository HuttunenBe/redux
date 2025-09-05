/*import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    removeFromCart: (state, action) => {
        state.cart = state.cart.filter(item => item.id === action.payload.id)
    }
  },
});


export const { addtocart } = cartSlice.actions;
export const { clearCart,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// function 
// button 

*/