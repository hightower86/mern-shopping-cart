const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

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
app.get('/api/cart', (req, res) => {
  try {
    res.json(req.query);
    console.log('api/cart', req.query);
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong' });
    //console.log('error');
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
