import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import Goods from './Goods';
import './App.css';

const App = () => {
  const [goods, setGoods] = useState([]);

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

  return (
    <div>
      <h1>Shopping cart currency calculator </h1>
      <Goods goods={goods} />
      <Cart />
    </div>
  );
};

export default App;
