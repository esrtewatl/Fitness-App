import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGoal } from '../goalsSlice'; // Import the Redux action
import "./goalsetting.css";
const GoalSetting = () => {
  const dispatch = useDispatch();
  const [goal, setGoal] = useState('');

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal.trim() !== '') {
      console.log('Submitting goal:', goal); // Check if this log appears
      dispatch(addGoal(goal)); // Dispatch the action to add the goal
      console.log('Goal added to state:', goal); // Check if this log appears
      setGoal(''); // Clear the input field
    }
  };
  
  return (
    <div className="goal-setting">
      <h2>Set Your Fitness Goals</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your fitness goal"
          value={goal}
          onChange={handleGoalChange}
        />
        <button type="submit">Set Goal</button>
      </form>
    </div>
  );
};

export default GoalSetting;
