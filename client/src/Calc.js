import React from 'react';
import './Calc.css';

const Calc = () => {
  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const currency = formData.get('currency');
    //console.log(formData.get('currency'));
    fetch(`http://localhost:5002/api/cart?currency=${currency}&`)
      .then(res => res.json())
      .then(data => console.table(data))
      .catch(error => {
        console.log(error);
        return error;
      });
  };
  return (
    <div>
      <h2>Currency Calculator</h2>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <label htmlFor='i-currency'>Select currency</label>
          <select name='currency' id=''>
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
