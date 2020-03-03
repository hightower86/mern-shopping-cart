const express = require('express');
const config = require('config');

const PORT = config.get('port') || 5001;
const app = express();

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
