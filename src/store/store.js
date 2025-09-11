import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice"; 

const store = configureStore({
  reducer: {
    products: productsReducer,
    users: userReducer,
    cart: cartReducer, 
  },
});

export default store;
