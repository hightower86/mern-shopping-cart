import React from 'react';

const Goods = ({ goods }) => {
  console.log(goods);
  return (
    <div>
      <ul>
        {goods.map(({ id, title, price }) => (
          <li key={id}>
            {title},{price},
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Goods;
