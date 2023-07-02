const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}))

app.get('/tacos', (req, res) => {
  res.send('This is a GET request of REST API');
});

app.post('/tacos', (req, res) => {
  const { icecream, qty, price } = req.body;
  res.send(
    `The POST request form is succesfully submitted using REST API with QUANTITY ${qty} ICECREAM - ${icecream} of price - ${price}`
  );
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
