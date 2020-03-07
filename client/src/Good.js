import React from 'react';

import './Good.css';

const Good = ({ id, name, price, addToCartHandle }) => {
  return (
    <div className='good' key={id}>
      <h3>{name}</h3>
      <p>price: {price}</p>
      <button id={id} onClick={addToCartHandle}>
        add to cart
      </button>
    </div>
  );
};

export default Good;
