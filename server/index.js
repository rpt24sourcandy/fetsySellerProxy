const express = require('express');
const app = express();
const PORT = 3015;
const HOST = "localhost";
// const morgan = require("morgan");
// const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(express.static('./client/dist'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/info', (req, res) => {
  res.send('This is a proxy service which proxies to the Fetsy Seller API.');
});

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
