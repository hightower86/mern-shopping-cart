import React from 'react';

import './Good.css';

const Good = ({ id, title, price }) => {
  return (
    <div className='good' key={id}>
      <h3>{title}</h3>
      <p>price: {price} $</p>
      <button>add to cart</button>
    </div>
  );
};

export default Good;
