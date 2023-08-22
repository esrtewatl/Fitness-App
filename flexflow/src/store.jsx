import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from './goalsSlice'; // Import the goals reducer

const store = configureStore({
  reducer: {
    goals: goalsReducer, // Include the goals reducer in the store
    // Add other reducers here if applicable
  },
});

export default store;
