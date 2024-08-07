// Import the configureStore function from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import the homeSlice reducer
import homeSlice from "./homeSlice";

// Configure and create the Redux store
export const store = configureStore({
    // Define the reducer for the store
    reducer: {
        // Add the home slice reducer under the 'home' key
        home: homeSlice,
    },
});
