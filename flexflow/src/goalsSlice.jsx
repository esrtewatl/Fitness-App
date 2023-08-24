import { createSlice } from '@reduxjs/toolkit';

const goalsSlice = createSlice({
  name: 'goals',
  initialState: [],
  reducers: {
    setGoals: (state, action) => {
      return action.payload;
    },
    addGoal: (state, action) => {
      state.push(action.payload);
    },
    updateGoal: (state, action) => {
      const { index, goal } = action.payload;
      state[index] = goal;
    },
    deleteGoal: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);
    },
    loadGoals: (state, action) => {
      return action.payload;
    }, // Add this loadGoals action
  },
});

export const { setGoals, addGoal, updateGoal, deleteGoal, loadGoals } = goalsSlice.actions;

export default goalsSlice.reducer;
