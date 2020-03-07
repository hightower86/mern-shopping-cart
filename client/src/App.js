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
        // console.table('in useEffect', data);
      } catch (e) {
        console.error(e);
      }
    };
    getDb();
  }, []);

  const addToCartHandle = e => {
    console.log(e.target.name);
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
      //console.log(newItem);
      setCartItems([
        ...cartItems.slice(0, itemIndex),
        newItem,
        ...cartItems.slice(itemIndex + 1)
      ]);
    } else {
      setCartItems([...cartItems, { ...itemToCart, quantity: 1 }]);
    }

    //console.table(cartItems);
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
