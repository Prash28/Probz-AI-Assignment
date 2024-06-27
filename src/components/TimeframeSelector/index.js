// import React, { useEffect, useState } from 'react';
// import { ScriptElementKindModifier } from 'typescript';
// import Chart from '../Chart';
// import NewChart from '../NewChart'
import "../../styles/timeFrameStyles.css"

const TimeFrameSelector = ({onTimeFrameChange}) => {
  return (
    <div className="buttons-container">
    <button id="daily" onClick={() => onTimeFrameChange('day')}>Daily</button>
    <button id="weekly" onClick={() => onTimeFrameChange('week')}>Weekly</button>
    <button id="monthly" onClick={() => onTimeFrameChange('month')}>Monthly</button>
    </div>
  );
};

export default TimeFrameSelector;
