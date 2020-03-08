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

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });
//app.use('/api/cart', require('./routes/cart.routes'));

// app.post('/api/cart', jsonParser, (req, res) => {
//   try {
//     res.send(req.body);
//   } catch (e) {
//     res.status(500).json({ message: 'Something goes wrong' });
//   }
// });
const getCurrencyRates = async cart => {
  try {
    let response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const json = await response.json();
    const valutes = json.Valute;

    rates = cart.reduce((result, cartItem) => {
      const currency = cartItem.currency;
      const rate =
        currency !== 'rub' ? valutes[cartItem.currency.toUpperCase()].Value : 1;
      result.push(rate);
      return result;
    }, []);

    return rates;
  } catch (e) {
    console.error(e);
  }
};

// async function getUserAsync(name) {
//   try{
//     let response = await fetch(`https://api.github.com/users/${name}`);
//     return await response.json();
//   }catch(err){
//     console.error(err);
//     // Handle errors here
//   }
// }

app.post('/api/cart', async (req, res) => {
  //console.log(req.body);
  try {
    //res.json(req.body);
    const cartItems = req.body;
    //console.log(cartItems);
    const currencyRates = await getCurrencyRates(cartItems);
    //console.log(currencyRates);
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
    // await mongoose.connect(config.get('mongoUri'), {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true
    // });
    app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();
