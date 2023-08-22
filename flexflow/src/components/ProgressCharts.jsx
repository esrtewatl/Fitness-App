import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import './progresscharts.css';
const ProgressCharts = ({ data, options }) => {
  return (
    <div className="chart-container">
      <ResponsiveLine data={data} {...options} />
    </div>
  );
};

export default ProgressCharts;
