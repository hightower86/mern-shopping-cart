import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import Goods from './Goods';
import './App.css';

const App = () => {
  const [goods, setGoods] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getDb = async () => {
      try {
        const response = await fetch('http://localhost:5002/api/goods');
        const data = await response.json();
        setGoods(data);
        console.table('in useEffect', data);
      } catch (e) {
        console.error(e);
      }
    };
    getDb();
  }, []);

  const addToCartHandle = e => {
    console.log(e.target.id);
    const { id, name, quantity, currency, price } = e.target;
    //console.log(goods.find(g => String(g.id) == String(e.target.id)));
    setCartItems([
      ...cartItems,
      goods.find(g => String(g.id) === String(e.target.id))
    ]);
    console.table(cartItems);
  };

  return (
    <div>
      <h1>Shopping cart currency calculator </h1>
      <Goods goods={goods} addToCartHandle={addToCartHandle} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
