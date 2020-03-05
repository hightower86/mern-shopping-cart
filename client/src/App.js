import React, { useState, useEffect } from 'react';
import Calc from './Calc';
import Goods from './Goods';

// const getGoods = () => {
//   const db = console.log(db);
//   return db;
// };

const App = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => getDb(), []);

  const getDb = () => {
    fetch('http://localhost:5002/api/goods')
      .then(res => res.json())
      .then(data => setGoods(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>App </h1>
      <Goods goods={goods} />
      <Calc />
    </div>
  );
};

export default App;
