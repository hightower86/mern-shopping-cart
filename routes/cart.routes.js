const { Router } = require('express');
const router = Router();

// api/cart/
router.post('/cart', (req, res) => {
  try {
    const { currency, quantity } = req.body;
    // const course = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    //   .then(resp => resp.json())
    //   .then(data => console.log(data.Valute.USD.Value));
    res.status(201).json({ currency: currency, quantity: quantity });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong' });
  }
});

module.exports = router;
