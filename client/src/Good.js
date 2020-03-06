import React from 'react';

import './Good.css';

const Good = ({ id, title, price }) => {
  return (
    <div className='good' key={id}>
      <h3>{title}</h3>
      <p>price: {price}</p>
      <select name='currency' id=''>
        <option value='usd'>USD</option>
        <option value='eur'>EUR</option>
        <option value='rub'>RUB</option>
      </select>
      <button>add to cart</button>
    </div>
  );
};

export default Good;
