import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exists = state.cart.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.cart.push(action.payload);
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});


export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
