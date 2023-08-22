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
  },
});

export const { setGoals, addGoal, updateGoal, deleteGoal } = goalsSlice.actions;

export default goalsSlice.reducer;
