import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addGoal } from '../goalsSlice';
import './goalsetting.css';

const GoalSetting = () => {
  const dispatch = useDispatch();
  const [goal, setGoal] = useState('');

  useEffect(() => {
    const storedGoal = localStorage.getItem('storedGoal');
    if (storedGoal) {
      setGoal(storedGoal);
    }
  }, []);

  const handleGoalChange = (e) => {
    const newValue = e.target.value;
    setGoal(newValue);
    localStorage.setItem('storedGoal', newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal.trim() !== '') {
      dispatch(addGoal(goal));
      setGoal('');
      localStorage.removeItem('storedGoal'); // Clear the stored goal after submitting
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
