// rootReducer.js
import { combineReducers } from 'redux';
import goalsReducer from './goalsSlice'; // Import the goals reducer
import workoutsReducer from './workoutsSlice'; // Import the workouts reducer

const rootReducer = combineReducers({
  goals: goalsReducer,
  workouts: workoutsReducer, // Add the workouts reducer
});

export default rootReducer;
