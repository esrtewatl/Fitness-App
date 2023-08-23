import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWorkout, updateWorkout, deleteWorkout } from '../workoutsSlice';
import ProgressCharts from './ProgressCharts'; // Import your ProgressCharts component
import './workouttracking.css';

const WorkoutTracking = () => {
  const workouts = useSelector((state) => state.workouts);

  // Extract workout durations for the chart data
  const workoutDurations = workouts.map((workout) => workout.duration);

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

    // Update local storage with the new workouts
    localStorage.setItem('workouts', JSON.stringify(workouts));
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


  const chartData = workouts.map((workout, index) => ({
    day: `Day ${index + 1}`,
    duration: workout.duration,
  }));

  return (
    <div className="workout-tracking">
      <h2>Track Your Workouts</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="exercise">Exercise:</label>
        <input
          type="text"
          id="exercise"
          value={exercise}
          onChange={handleExerciseChange}
          required
        />
        <label htmlFor="duration">Duration (minutes):</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={handleDurationChange}
          required
        />
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          value={notes}
          onChange={handleNotesChange}
        ></textarea>
        <button type="submit">
          {editingIndex !== null ? 'Update Workout' : 'Add Workout'}
        </button>
      </form>

      <div className="workout-list">
        <h3>Workout List</h3>
        {workouts.map((workout, index) => (
          <div key={index} className="workout-item">
            <div>
              <strong>Exercise:</strong> {workout.exercise}
            </div>
            <div>
              <strong>Duration:</strong> {workout.duration} minutes
            </div>
            <div>
              <strong>Notes:</strong> {workout.notes}
            </div>
            <div>
              <button onClick={() => handleEdit(index, workout)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Render your ProgressCharts component */}
      {/* Render your ProgressCharts component */}
{/* Render your ProgressCharts component */}
<ProgressCharts data={chartData} />


    </div>
  );
};

export default WorkoutTracking;
