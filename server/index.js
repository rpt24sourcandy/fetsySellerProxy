const express = require('express');
const app = express();
const PORT = 3015;
const HOST = "localhost";
const axios = require('axios');
const path = require('path');
const cors = require('cors');
// const morgan = require("morgan");
// const { createProxyMiddleware } = require('http-proxy-middleware');
app.use(express.static('./client/dist'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(cors);

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});


/* ----- SERVE STATIC FILES ----- */

app.get('/items/:item_id', async (req, res) => {
  // let item_id = req.params.item_id;
  // let response = await axios.get(`http://localhost:3005/items/${item_id}`)
  let package = path.join(__dirname, '../client/dist/index.html');
  res.sendFile(package);
});


/* ----- FETCH BUNDLES ----- */

app.get('/sellerBundle', async (req, res) => {
  // console.log('hitting route for seller bundle')
  var response = await axios.get('http://localhost:3005/items/1/bundle.js');
  res.send(response.data)
})

app.get('/shoppingBundle', async (req, res) => {
  // console.log('hitting route for shopping bundle')
  var response = await axios.get(`http://localhost:3004/items/1/bundle.js`);
  // console.log(response.data)
  res.send(response.data)
})

app.get('/imagesBundle', async (req, res) => {
  var response = await axios.get('http://localhost:3006/bundle.js');
  res.send(response.data)
})

app.get('/reviewsBundle', async (req, res) => {
  var response = await axios.get('http://localhost:3002/items/1/bundle.js');
  res.send(response.data)
})


/* ----- FETCH SELLER DATA ----- */

app.get('/items/:item_id/seller', async (req, res) => {
  let item_id = req.params.item_id;
  // console.log('hitting route for seller data')
  var response = await axios.get(`http://localhost:3005/items/${item_id}/seller`);
  // console.log(response.data)
  res.send(response.data)
})

app.get('/shopping/items', (req, res) => {
  axios.get('http://localhost:3004/shopping/items').then(function (response) {
    // console.log(response.data)
    res.send(response.data)
  })
})

app.get('/item/images/distinct', (req, res) => {
  axios.get('http://localhost:3006/item/images/distinct').then(function (response) {
    // console.log('IMAGESS', response.data)
    res.send(response.data)
  })
})


/* ----- FETCH SHOPPING DATA ----- */

app.get('/shopping/items/:item_id', (req, res) => {
  let item_id = req.params.item_id;
  axios.get(`http://localhost:3004/shopping/items/${item_id}`).then(function (response) {
    // console.log('IMAGESS', response.data)
    res.send(response.data)
  })
})


/* ----- FETCH REVIEWS DATA ----- */

app.get('/api/items/:itemId/reviews', (req, res) => {
  console.log('hitting reviews data api route')
  let itemId = req.params.itemId;
  axios.get(`http://http://localhost:3002/api/items/${itemId}/reviews`).then(function (response) {
    console.log('reviews', response.data)
    res.send(response.data)
  })
});
