'use strict';

var url = require('url');
var ShoppingCart = require('./ShoppingCartService');

module.exports.shoppingcartsPost = function shoppingcartsPost (req, res, next) {
  var customerId = req.swagger.params['customer_id'].value;
  var sessionId = req.swagger.params['session_id'].value;
  
  var result = ShoppingCart.shoppingcartsPost(customerId, sessionId);

  if(typeof result !== 'undefined') {
    
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(201);
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.shoppingcartsShoppingcartIdDelete = function shoppingcartsShoppingcartIdDelete (req, res, next) {
  var shoppingcartId = req.swagger.params['shoppingcart_id'].value;
  
  var result = ShoppingCart.shoppingcartsShoppingcartIdDelete(shoppingcartId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else {
    res.writeHead(204);
    res.end();
  }
};
