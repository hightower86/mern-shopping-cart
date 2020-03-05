import React, { useState, useEffect } from 'react';
import Calc from './Calc';
import Goods from './Goods';

// const getGoods = () => {
//   const db = console.log(db);
//   return db;
// };

const App = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    const getDb = async () => {
      try {
        const response = await fetch('http://localhost:5002/api/goods');
        const db = await response.json();
        setGoods(db);
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
