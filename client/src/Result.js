import React from 'react';
import './Result.css';

const Result = ({ calculate, details }) => {
  return (
    <div className='result-wrapper'>
      <h2>Result</h2>
      <div className='result'>
        <button onClick={calculate}>Calculate !</button>
        <div className='details'>
          {Object.keys(details).map(key => (
            <div key={key}>
              {key}: {details[key]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
