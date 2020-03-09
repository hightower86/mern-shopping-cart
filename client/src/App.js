import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import Goods from './Goods';
import Result from './Result';
import './App.css';

const App = () => {
  const [goods, setGoods] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [result, setResult] = useState('');

  useEffect(() => {
    const getDb = async () => {
      try {
        const response = await fetch('http://localhost:5002/api/goods');
        const data = await response.json();
        setGoods(data);
      } catch (e) {
        console.error(e);
      }
    };
    getDb();
  }, []);

  const onCurrencyChange = e => {
    const cartIndex = cartItems.findIndex(i => {
      return String(i.id) === String(e.target.id);
    });
    const cartItem = cartItems[cartIndex];
    if (cartItem) {
      setCartItems([
        ...cartItems.slice(0, cartIndex),
        { ...cartItem, currency: e.target.value },
        ...cartItems.slice(cartIndex + 1)
      ]);
    }
    console.log(JSON.stringify(cartItems));
  };

  const addToCartHandle = e => {
    const itemToCart = goods.find(g => String(g.id) === String(e.target.id));
    const itemIndex = cartItems.findIndex(
      i => String(i.id) === String(e.target.id)
    );
    let item = cartItems[itemIndex];
    if (item) {
      const newItem = {
        ...item,
        quantity: item.quantity + 1,
        price: item.price + itemToCart.price
      };
      setCartItems([
        ...cartItems.slice(0, itemIndex),
        newItem,
        ...cartItems.slice(itemIndex + 1)
      ]);
    } else {
      setCartItems([
        ...cartItems,
        { ...itemToCart, quantity: 1, currency: 'usd' }
      ]);
    }
  };

  const calculate = () => {
    const params = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(cartItems)
    };
    fetch(`http://localhost:5002/api/cart`, params)
      .then(res => res.json())
      .then(data => setResult(JSON.stringify(data)))
      .catch(error => {
        console.log(error);
        return error;
      });
  };

  return (
    <div>
      <h1>Shopping cart currency calculator </h1>
      <Goods
        goods={goods}
        addToCartHandle={addToCartHandle}
        onCurrencyChange={onCurrencyChange}
      />
      <div className='cart-result'>
        <Cart cartItems={cartItems} onCurrencyChange={onCurrencyChange} />
        <Result calculate={calculate} details={result} />
      </div>
    </div>
  );
};

export default App;
