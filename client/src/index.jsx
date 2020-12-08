import React from 'react';
import ReactDOM from 'react-dom';
import Images from './components/Images.jsx';
import Reviews from './components/Reviews.jsx';
import Seller from './components/Seller.jsx';
import Shopping from './components/Shopping.jsx';

ReactDOM.render(
  <Images />,
  document.getElementById('images')
);

ReactDOM.render(
  <Reviews />,
  document.getElementById('reviews')
);

ReactDOM.render(
  <Seller />,
  document.getElementById('seller')
);

ReactDOM.render(
  <Shopping />,
  document.getElementById('shopping')
);
