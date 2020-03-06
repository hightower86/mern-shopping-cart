import React from 'react';

import Good from './Good';

import './Goods.css';

const Goods = ({ goods, addToCartHandle }) => {
  return (
    <div className='goods'>
      {goods.map(({ id, name, price }) => (
        <Good
          id={id}
          name={name}
          price={price}
          addToCartHandle={addToCartHandle}
        />
      ))}
    </div>
  );
};

export default Goods;
