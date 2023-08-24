import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWorkout, updateWorkout, deleteWorkout } from '../workoutsSlice';
import ProgressCharts from './ProgressCharts';
import './workouttracking.css';

const WorkoutTracking = () => {
  const workouts = useSelector((state) => state.workouts);

  const dispatch = useDispatch();
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const colorPalette = ['#007acc', '#00a885', '#f39c12', '#d9534f', '#9b59b6', '#3498db', '#e74c3c'];

  const handleExerciseChange = (e) => {
    setExercise(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Update existing workout
      dispatch(updateWorkout({ index: editingIndex, exercise, duration, notes, day: selectedDay }));
      setEditingIndex(null);
    } else {
      // Add new workout
      dispatch(addWorkout({ exercise, duration, notes, day: selectedDay }));
    }
    setExercise('');
    setDuration('');
    setNotes('');
    setSelectedDay('');
    localStorage.setItem('workouts', JSON.stringify(workouts));
  };

  const handleEdit = (index, workout) => {
    setExercise(workout.exercise);
    setDuration(workout.duration);
    setNotes(workout.notes);
    setSelectedDay(workout.day);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    dispatch(deleteWorkout(index));
  };

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
        <label htmlFor="day">Day:</label>
        <select id="day" value={selectedDay} onChange={handleDayChange} required>
          <option value="" disabled>Select a day</option>
          {daysOfWeek.map((day, index) => (
            <option key={index} value={day}>{day}</option>
          ))}
        </select>
        <button type="submit">
          {editingIndex !== null ? 'Update Workout' : 'Add Workout'}
        </button>
      </form>

      <div className="workout-list">
        <h3>Workout List</h3>
        {workouts.map((workout, index) => (
          <div key={index} className="workout-item" style={{ borderColor: colorPalette[daysOfWeek.indexOf(workout.day)] }}>
            <div>
              <strong>Day:</strong> {workout.day}
            </div>
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

      <ProgressCharts data={workouts} colorPalette={colorPalette} />
    </div>
  );
};

export default WorkoutTracking;
