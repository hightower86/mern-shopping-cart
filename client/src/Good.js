import React, { useState } from 'react';

import './Good.css';

const Good = ({ id, name, price, addToCartHandle }) => {
  //const inpCurrency = useRef(null);

  const [currency, setCurrency] = useState('usd');

  //useEffect(() => (inpCurrency.current.value = currency), []);

  return (
    <div className='good' key={id}>
      <h3>{name}</h3>
      <p>price: {price}</p>
      {/* <select name='currency' id={id} onChange={onCurrencyChange}>
        <option value='usd'>USD</option>
        <option value='eur'>EUR</option>
        <option value='rub'>RUB</option>
      </select> */}
      <button id={id} name={currency} onClick={addToCartHandle}>
        add to cart
      </button>
    </div>
  );
};

export default Good;
