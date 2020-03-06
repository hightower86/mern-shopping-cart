import React from 'react';

import './Good.css';

const Good = ({ id, name, price, addToCartHandle }) => {
  return (
    <div className='good' key={id}>
      <h3>{name}</h3>
      <p>price: {price}</p>
      <select name='currency' id=''>
        <option value='usd'>USD</option>
        <option value='eur'>EUR</option>
        <option value='rub'>RUB</option>
      </select>
      <button name={name} onClick={addToCartHandle}>
        add to cart
      </button>
    </div>
  );
};

export default Good;
