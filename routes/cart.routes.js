const { Router } = require('express');
const router = Router();

// api/cart/
router.post('/', async (req, res) => {
  //const { currency, quantity } = req.body;
  //console.log('currency:', currency, 'quantity:', quantity);
  console.log(req.body);
  try {
    // const course = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    //   .then(resp => resp.json())
    //   .then(data => console.log(data.Valute.USD.Value));
    res.status(201).send(req.body);
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong' });
  }
});

module.exports = router;
