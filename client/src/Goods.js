import React from 'react';

import Good from './Good';

import './Goods.css';

const Goods = ({ goods }) => {
  console.log(goods);
  return (
    <div className='goods'>
      {goods.map(({ id, title, price }) => (
        <Good key={id} title={title} price={price} />
      ))}
    </div>
  );
};

export default Goods;
