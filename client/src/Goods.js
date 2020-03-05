import React from 'react';

const Goods = ({ goods }) => {
  console.log(goods);
  return (
    <div>
      {/* <ul>
        {goods.map(good => (
          <li key={good.id}>{good}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Goods;
