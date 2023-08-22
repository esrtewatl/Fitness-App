import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { addWorkout, updateWorkout, deleteWorkout } from '../workoutsSlice'; // Import Redux actions
import './workouttracking.css'; // Create a CSS file for styling (optional)
const WorkoutTracking = () => {
  const workouts = useSelector((state) => state.workouts);
  const dispatch = useDispatch();
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleExerciseChange = (e) => {
    setExercise(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Update existing workout
      dispatch(updateWorkout({ index: editingIndex, exercise, duration, notes }));
      setEditingIndex(null);
    } else {
      // Add new workout
      dispatch(addWorkout({ exercise, duration, notes }));
    }
    setExercise('');
    setDuration('');
    setNotes('');
  };

  const handleEdit = (index, workout) => {
    setExercise(workout.exercise);
    setDuration(workout.duration);
    setNotes(workout.notes);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    dispatch(deleteWorkout(index));
  };

  return (
    <div className="workout-tracking">
      <h2>Track Your Workouts</h2>
      <form onSubmit={handleSubmit}>
        <label>Exercise:</label>
        <input type="text" value={exercise} onChange={handleExerciseChange} required />
        <label>Duration (minutes):</label>
        <input type="number" value={duration} onChange={handleDurationChange} required />
        <label>Notes:</label>
        <textarea value={notes} onChange={handleNotesChange}></textarea>
        <button type="submit">{editingIndex !== null ? 'Update Workout' : 'Add Workout'}</button>
      </form>
   
    </div>
  );
};

export default WorkoutTracking;
