import { configureStore } from '@reduxjs/toolkit';
// Imports the function that sets up the Redux store (where all global state lives).

import productsReducer from './productSlice';
// Imports the reducer we just made for the "products" slice.

import userReducer from "./userSlice"

const store = configureStore({
  reducer: {
    products: productsReducer,
    users: userReducer, // Add user slice here
  },
});

// Creates and exports the store so we can use it in our app.


export default store;

// combines all slices into one global store.