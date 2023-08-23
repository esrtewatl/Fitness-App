import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateGoal, deleteGoal } from '../goalsSlice';
import './goalslist.css';

const GoalsList = () => {
  const goals = useSelector((state) => state.goals);
  const [editedGoal, setEditedGoal] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem('fitnessGoals'));
    if (storedGoals) {
      dispatch({ type: 'goals/goalsLoaded', payload: storedGoals });
    }
  }, [dispatch]);

  const handleEdit = (index, goal) => {
    setEditIndex(index);
    setEditedGoal(goal);
  };

  const handleUpdate = () => {
    if (editedGoal.trim() !== '' && editIndex !== null) {
      dispatch(updateGoal({ index: editIndex, goal: editedGoal }));
      setEditIndex(null);
      setEditedGoal('');
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteGoal(index));
  };

  return (
    <div className="goals-list">
      <h2>Your Fitness Goals</h2>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedGoal}
                  onChange={(e) => setEditedGoal(e.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
              </>
            ) : (
              <>
                {goal}
                <button onClick={() => handleEdit(index, goal)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalsList;
