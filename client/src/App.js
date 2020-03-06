import React, { useState, useEffect } from 'react';
import Calc from './Cart';
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
      <h1>App </h1>
      <Goods goods={goods} />
      <Calc />
    </div>
  );
};

export default App;
