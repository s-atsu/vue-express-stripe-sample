require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY);
const express = require('express');
const app = express();
// app.use(express.static('public'));

app.use('/img', express.static(__dirname + '/dist/img/'));
app.use('/css', express.static(__dirname + '/dist/css/'));
app.use('/js', express.static(__dirname + '/dist/js/'));
app.get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'));
app.post('/create-checkout', async (req, res) => {
  const YOUR_DOMAIN = 'http://localhost:3000';
  const session = await stripe.checkout.sessions.create({
    success_url: `${YOUR_DOMAIN}`,
    cancel_url: `${YOUR_DOMAIN}`,
    payment_method_types: ['card'],
    line_items: [
      {
        price: process.env.PRICE_ID,
        quantity: 1
      },
    ],
    mode: 'subscription',
  });
  res.redirect(303, session.url);
});

app.listen(3000, () => console.log('Running on port 3000'));