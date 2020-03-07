import React from 'react';
import CartItem from './CartItem';
import './Cart.css';

const Cart = ({ cartItems, onCurrencyChange }) => {
  return (
    <div>
      <h2>Cart</h2>
      <div className='result'>
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>name</td>
              <td>quantity</td>
              <td>currency</td>
              <td>price</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <CartItem
                item={item}
                key={item.id}
                onCurrencyChange={onCurrencyChange}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
