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

  const onCurrencyChange = e => {
    //setCurrency(e.target.value);
    const cartIndex = cartItems.findIndex(i => {
      //console.log(g, g.id);
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
    console.table(cartItems);
    //console.log('onCurrencyChange', e.target.value);
  };

  const addToCartHandle = e => {
    //console.log(e.target.name);
    const itemToCart = goods.find(g => String(g.id) === String(e.target.id));
    //console.log('itemToCart currency', itemToCart.currency);
    const itemIndex = cartItems.findIndex(
      i => String(i.id) === String(e.target.id)
    );
    let item = cartItems[itemIndex];
    if (item) {
      const newItem = {
        ...item,
        quantity: item.quantity + 1,
        price: item.price + itemToCart.price
        //currency: itemToCart.currency
      };
      //console.log(newItem);
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

    // console.table(cartItems);
  };

  return (
    <div>
      <h1>Shopping cart currency calculator </h1>
      <Goods
        goods={goods}
        addToCartHandle={addToCartHandle}
        onCurrencyChange={onCurrencyChange}
      />
      <Cart cartItems={cartItems} onCurrencyChange={onCurrencyChange} />
      <button>Calculate !</button>
    </div>
  );
};

export default App;
