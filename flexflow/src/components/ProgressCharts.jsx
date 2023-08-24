import React from 'react';
import { VictoryPie, VictoryTooltip } from 'victory';
import Legend from './Legend';

const ProgressCharts = ({ data }) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const colorPalette = ['#007acc', '#00a885', '#f39c12', '#d9534f', '#9b59b6', '#3498db', '#e74c3c'];

  const chartData = data.map((workout) => ({
    exercise: workout.exercise,
    duration: workout.duration,
    color: colorPalette[daysOfWeek.indexOf(workout.day)] // Assign color from colorPalette
  }));


  return (
    <div className="chart-container">
      <Legend daysOfWeek={daysOfWeek} colorPalette={colorPalette} />
      <VictoryPie
  data={chartData}
  x="exercise"
  y="duration"
  labelRadius={({ innerRadius }) => innerRadius + 40}
  colorScale={chartData.map(data => data.color)} // Use the color property from chartData
  labels={({ datum }) => `Duration: ${datum.duration} minutes`}
  labelComponent={<VictoryTooltip />}
  animate={{ duration: 500, easing: 'cubicInOut' }}
/>

    </div>
  );
};

export default ProgressCharts;
