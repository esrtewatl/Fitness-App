import { createSlice } from '@reduxjs/toolkit';

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState: [], // Make sure the initial state is an empty array
  reducers: {
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
  },
});

export const { setWorkouts, addWorkout, updateWorkout, deleteWorkout } = workoutsSlice.actions;
export default workoutsSlice.reducer;
