// Import configureStore from Redux Toolkit
// configureStore simplifies store setup and automatically includes middleware like redux-thunk
import { configureStore } from "@reduxjs/toolkit";

// Import reducers from your slices
import productsReducer from "./productSlice";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice"; 

// Create the Redux store
const store = configureStore({
  reducer: {
    // Combine slice reducers into a single root reducer
    // Each key here becomes a top-level state in Redux
    products: productsReducer, // state.products managed by productSlice
    users: userReducer,        // state.users managed by userSlice
    cart: cartReducer,         // state.cart managed by cartSlice
  },
});

// Export the store to use in your app (usually wrapped in <Provider>)
export default store;
