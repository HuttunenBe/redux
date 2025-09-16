// Import createSlice from Redux Toolkit
// createSlice helps to define a Redux slice with state, reducers, and actions in one place
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart slice
const initialState = {
  cart: [], // cart is an array that will hold the items added to the cart
};

// Create a slice named "cart"
const cartSlice = createSlice({
  name: "cart",       // Name of the slice
  initialState,       // Set the initial state defined above
  reducers: {         // Reducers define how the state changes in response to actions

    // Add an item to the cart
    addToCart: (state, action) => {
      // Check if the item is already in the cart
      const exists = state.cart.find((item) => item.id === action.payload.id);
      if (!exists) {
        // If it doesn't exist, push it into the cart array
        state.cart.push(action.payload);
      }
      // If it exists, do nothing (prevents duplicates)
    },

    // Clear all items from the cart
    clearCart: (state) => {
      state.cart = []; // Simply reset the cart array to empty
    },

    // Remove a specific item from the cart
    removeFromCart: (state, action) => {
      // Filter the cart array to remove the item with the matching id
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

// Export the actions so components can dispatch them
export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;

// Export the reducer to be added to the Redux store
export default cartSlice.reducer;
