import express from 'express';
import Data from './Data.js';

const app = express();
app.get('/api/products', (req, res) => {
  res.send(Data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
