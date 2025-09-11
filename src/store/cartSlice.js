import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    }
  },
});

// ✅ Correctly export all actions
export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;

// ✅ Export reducer
export default cartSlice.reducer;
