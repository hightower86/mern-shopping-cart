import React from 'react';

import Good from './Good';

import './Goods.css';

const Goods = ({ goods, addToCartHandle, onCurrencyChange }) => {
  return (
    <div className='goods'>
      {goods.map(({ id, name, price }) => (
        <Good
          key={id}
          id={id}
          name={name}
          price={price}
          currency='usd'
          addToCartHandle={addToCartHandle}
          //onCurrencyChange={onCurrencyChange}
        />
      ))}
    </div>
  );
};

export default Goods;
