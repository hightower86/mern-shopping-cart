import React from 'react';
import './Calc.css';

const Calc = () => {
  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h2>Currency Calculator</h2>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <label htmlFor='i-currency'>Select currency</label>
          <select name='' id=''>
            <option value='usd'>USD</option>
            <option value='eur'>EUR</option>
            <option value='rub'>RUB</option>
          </select>
        </div>
        <button>Count!</button>
      </form>
      <div className='result'>result</div>
    </div>
  );
};

export default Calc;
