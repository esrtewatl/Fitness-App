import { createSlice } from '@reduxjs/toolkit';

const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState: savedWorkouts,
  reducers: {
    setWorkouts: (state, action) => {
      return action.payload;
    },
    addWorkout: (state, action) => {
      state.push(action.payload);
    },
    updateWorkout: (state, action) => {
      const { index, exercise, duration, notes, day } = action.payload;
      state[index] = { exercise, duration, notes, day };
    },
    deleteWorkout: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);
    },
  },
});

export const { setWorkouts, addWorkout, updateWorkout, deleteWorkout } = workoutsSlice.actions;
export default workoutsSlice.reducer;
