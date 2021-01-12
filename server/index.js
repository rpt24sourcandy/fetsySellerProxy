const express = require('express');
const app = express();
const PORT = 3015;
const HOST = "localhost";
const axios = require('axios');
const path = require('path');
const compression = require('compression');

app.use(compression());
app.use('/items/:item_id', express.static('./client/dist'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


/* ----- FETCH BUNDLES ----- */

app.get('/sellerBundle', async (req, res) => {
  var response = await axios.get('http://localhost:3005/bundle.js');
  res.send(response.data)
})

app.get('/shoppingBundle', async (req, res) => {
  var response = await axios.get('http://18.222.223.190:3004/items/1/bundle.js');
  res.send(response.data)
})

app.get('/imagesBundle', async (req, res) => {
  var response = await axios.get('http://13.52.213.118:3006/items/1/bundle.js');
  res.send(response.data)
})

app.get('/reviewsBundle', async (req, res) => {
  var response = await axios.get('http://54.151.123.24:3002/items/2/bundle.js');
  res.send(response.data)
})


/* ----- FETCH SELLER DATA ----- */

app.get('/items/:item_id/seller', async (req, res) => {
  let item_id = req.params.item_id;
  var response = await axios.get(`http://3.21.248.149:3005/items/${item_id}/seller`);
  // console.log(response.data)
  res.send(response.data)
})

app.get('/shopping/items', (req, res) => {
  axios.get('http://18.222.223.190:3004/shopping/items').then(function (response) {
    res.send(response.data)
  })
})

app.get('/item/images', (req, res) => {
  axios.get('http://13.52.213.118:3006/item/images').then(function (response) {
    res.send(response.data)
  })
})


/* ----- FETCH SHOPPING DATA ----- */

app.get('/shopping/items/:item_id', (req, res) => {
  let item_id = req.params.item_id;
  axios.get(`http://18.222.223.190:3004/shopping/items/${item_id}`).then(function (response) {
    res.send(response.data)
  })
})


/* ----- FETCH REVIEWS DATA ----- */

app.get('/api/items/:itemId/reviews', (req, res) => {
  let itemId = req.params.itemId;
  axios.get(`http://54.151.123.24:3002/api/items/${itemId}/reviews`).then(function (response) {
    console.log('reviews', response.data)
    res.send(response.data)
  })
});

/* ----- FETCH IMAGES DATA ----- */

app.get('/item/:itemId/images', (req, res) => {
  console.log('hitting images data api route')
  let itemId = req.params.itemId;
  axios.get(`http://13.52.213.118:3006/item/${itemId}/images`).then(function (response) {
    console.log('reviews', response.data)
    res.send(response.data)
  })
});


app.listen(PORT, () => {
  console.log(`Starting Proxy at ${PORT}`);
});
