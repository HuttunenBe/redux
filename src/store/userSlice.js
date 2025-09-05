import { createSlice } from "@reduxjs/toolkit";
// Imports a helper from Redux Toolkit to easily create a slice of state with actions and reducers.

const initialState = {
    users: [], 
    // Our initial data: an empty array of products.
}

const api = "https://jsonplaceholder.typicode.com"

const userSlice = createSlice({
    name: "user", 
    // Name of this slice. Used to identify it in Redux.
    initialState, 
    // Sets the starting data for this slice.
    reducers: {}, 
    // We can add functions here to change the state (like addProduct, removeProduct).
    extraReducers: (builder) => { 
        // This is where we handle actions from outside this slice (like async API calls).
    },
});

export default userSlice.reducer; 
