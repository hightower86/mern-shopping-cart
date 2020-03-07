import React from 'react';

import './CartItem.css';

const CartItem = ({ item, onCurrencyChange }) => {
  const { id, name, quantity, price } = item;
  console.log(item);
  return (
    <tr className='t-row'>
      <td className='td-id'>{id}</td>
      <td className='td-name'>{name}</td>
      <td className='td-q'>{quantity}</td>
      <td>
        <select name='currency' id={id} onChange={onCurrencyChange}>
          <option value='usd'>USD</option>
          <option value='eur'>EUR</option>
          <option value='rub'>RUB</option>
        </select>
      </td>
      <td className='td-price'>{price}</td>
    </tr>
  );
};

export default CartItem;
