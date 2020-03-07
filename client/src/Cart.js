import React from 'react';
import CartItem from './CartItem';
import './Cart.css';

const Cart = ({ cartItems, onCurrencyChange }) => {
  //const [items, setItems] = useState([]);
  //useEffect(() => console.table(cartItems), [cartItems]);

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
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'></div>
        <button>Calculate !</button>
      </form>
    </div>
  );
};

export default Cart;
