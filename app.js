const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use('/api', require('./routes/cart.routes'));

const PORT = config.get('port') || 5001;

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();
