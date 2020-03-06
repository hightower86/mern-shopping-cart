import React from 'react';
import './Cart.css';

const Cart = () => {
  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const currency = formData.get('currency');
    //console.log(formData.get('currency'));
    fetch(`http://localhost:5002/api/cart?currency=${currency}&`)
      .then(res => res.json())
      .then(data => console.table(data))
      .catch(error => {
        console.log(error);
        return error;
      });
  };
  return (
    <div>
      <h2>Cart</h2>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'></div>
        <button>Count!</button>
      </form>
      <div className='result'>result</div>
    </div>
  );
};

export default Cart;
