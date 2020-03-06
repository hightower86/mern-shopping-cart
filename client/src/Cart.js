import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
  //const [items, setItems] = useState([]);

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
            {cartItems.map(({ id, name, price, quantity, currency }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{currency}</td>
                <td>{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'></div>
        <button>Calculate !</button>
      </form>
    </div>
  );
};

export default Cart;
