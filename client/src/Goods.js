import React from 'react';

import Good from './Good';

import './Goods.css';

const Goods = ({ goods }) => {
  const addToCartHandle = e => {
    console.dir(e.target.name);
  };

  return (
    <div className='goods'>
      {goods.map(({ id, name, price }) => (
        <Good
          key={id}
          name={name}
          price={price}
          addToCartHandle={addToCartHandle}
        />
      ))}
    </div>
  );
};

export default Goods;
