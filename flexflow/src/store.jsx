import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from './goalsSlice'; // Import the goals reducer



const store = configureStore({
  reducer: {
    goals: goalsReducer, // Include the goals reducer in the store
    // Add other reducers here if applicable
  },
  setWorkouts: (state, action) => {
    return action.payload;
  },
  addWorkout: (state, action) => {
    state.push(action.payload);
  },
  updateWorkout: (state, action) => {
    const { index, exercise, duration, notes } = action.payload;
    state[index] = { exercise, duration, notes };
  },
  deleteWorkout: (state, action) => {
    const index = action.payload;
    state.splice(index, 1);
  },
});

export default store;
