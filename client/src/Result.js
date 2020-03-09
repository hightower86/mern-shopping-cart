import React from 'react';
import './Result.css';

const Result = ({ calculate }) => {
  return (
    <div className='result-wrapper'>
      <h2>Result</h2>
      <div className='result'>
        <button onClick={calculate}>Calculate !</button>
        <div className='details'>Details</div>
      </div>
    </div>
  );
};

export default Result;
