import React from 'react';
import './Legend.css';

const Legend = ({ daysOfWeek, colorPalette }) => {
  return (
    <div className="legend">
      {daysOfWeek.map((day, index) => (
        <div key={index} className="legend-item">
          <span className="legend-color" style={{ backgroundColor: colorPalette[index] }} />
          <span className="legend-label">{day}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
