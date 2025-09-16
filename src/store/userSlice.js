// Import functions from Redux Toolkit
// createSlice: to define a slice of Redux state
// createAsyncThunk: to handle asynchronous actions like API calls
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Import axios to make HTTP requests
import axios from "axios";

// Initial state for the users slice
const initialState = {
  users: [], // array to store fetched users
};

// API endpoint to fetch users
const api = "https://jsonplaceholder.typicode.com/users";

// createAsyncThunk generates async Redux actions: pending, fulfilled, rejected
export const fetchUsers = createAsyncThunk(
  "users/users", // action type prefix
  async () => {
    // Perform GET request to the API
    const response = await axios.get(api);
    // Return the fetched data to be handled in extraReducers
    return response.data;
  }
);

// Create the users slice
const userSlice = createSlice({
  name: "users",        // name of the slice
  initialState,         // initial state
  reducers: {},         // no regular reducers needed here
  extraReducers(builder) {
    // Handle actions from createAsyncThunk
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // When fetchUsers succeeds, store users in Redux state
      state.users = action.payload;
      // Could also handle pending/rejected for loading/error if needed
    });
  },
});

// Export the reducer to be added to the Redux store
export default userSlice.reducer;
