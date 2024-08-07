// Import the createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux store for handling home-related state
export const homeSlice = createSlice({
    // Name of the slice
    name: "home",
    // Initial state for the slice
    initialState: {
        url: {},     // To store API configuration URLs
        genres: {},  // To store genres data
    },
    // Reducers to handle actions and update the state
    reducers: {
        // Reducer for getting API configuration and updating the state
        getApiConfiguration: (state, action) => {
            state.url = action.payload;  // Update the url state with payload data
        },
        // Reducer for getting genres and updating the state
        getGenres: (state, action) => {
            state.genres = action.payload;  // Update the genres state with payload data
        },
    },
});

// Export the action creators generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

// Export the reducer to be used in the Redux store
export default homeSlice.reducer;
