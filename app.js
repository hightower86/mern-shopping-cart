const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const db = [
  { id: 1, name: 'Table', price: 850 },
  { id: 2, name: 'TV', price: 900 },
  { id: 3, name: 'Laptop', price: 1500 },
  { id: 4, name: 'Iron', price: 80 },
  { id: 5, name: 'Boiler', price: 60 }
];

const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

const getTotalInRubles = (valutes, cart) => {
  const total = cart.reduce((rubSum, cartItem) => {
    const currency = cartItem.currency;
    if (currency === 'rub') {
      rubSum += cartItem.price;
    } else {
      const rate = valutes[cartItem.currency.toUpperCase()].Value;
      const rubPrice = cartItem.price * rate;
      rubSum += rubPrice;
    }
    return rubSum;
  }, 0);
  return total;
};

const getConvertedTotal = (totalInRubles, valutes) => {
  const convertedTotal = ['RUB', 'USD', 'EUR'].reduce((result, currency) => {
    if (currency === 'RUB') {
      result[currency] = Math.floor(totalInRubles * 100) / 100; //Math.round(totalInRubles, -1);
    } else {
      result[currency] =
        Math.floor((totalInRubles / valutes[currency].Value) * 100) / 100;
      //console.log(result);
    }
    return result;
  }, {});
  return convertedTotal;
};

const getCurrencyRates = async cart => {
  try {
    let response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const json = await response.json();
    const valutes = json.Valute;

    totalInRubles = getTotalInRubles(valutes, cart);

    const convertedTotal = getConvertedTotal(totalInRubles, valutes);

    return convertedTotal;
  } catch (e) {
    console.error(e);
  }
};

app.post('/api/cart', async (req, res) => {
  try {
    const cartItems = req.body;
    const currencyRates = await getCurrencyRates(cartItems);
    res.json(currencyRates);
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong' });
  }
});

app.get('/api/goods', (req, res) => {
  try {
    res.status(200).json(db);
  } catch (e) {
    res.status(500).json({ message: 'problem with connect to goods' });
  }
});

const PORT = config.get('port') || 5001;

async function start() {
  try {
    app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();
