import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip } from 'victory';

const ProgressCharts = ({ data }) => {
  return (
    <div className="chart-container">
      <VictoryChart domainPadding={20}>
        <VictoryAxis tickFormat={(tick) => `${tick}`} />
        <VictoryAxis dependentAxis />
        <VictoryBar
          data={data}
          x="day"
          y="duration"
          labels={({ datum }) => `Duration: ${datum.duration} minutes`}
          labelComponent={<VictoryTooltip />}
          style={{
            data: { fill: '#007acc' }, // Change the bar color here
          }}
          animate={{ duration: 500, easing: 'cubicInOut' }} // Add animation
        />
      </VictoryChart>
    </div>
  );
};

export default ProgressCharts;
