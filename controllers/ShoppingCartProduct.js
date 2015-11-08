'use strict';

var url = require('url');
var ShoppingCartProduct = require('./ShoppingCartProductService');

module.exports.shoppingcartsShoppingcartIdProductsGet = function shoppingcartsShoppingcartIdProductsGet (req, res, next) {
  var shoppingcartId = req.swagger.params['shoppingcart_id'].value;

  var result = ShoppingCartProduct.shoppingcartsShoppingcartIdProductsGet(shoppingcartId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.shoppingcartsShoppingcartIdProductsPost = function shoppingcartsShoppingcartIdProductsPost (req, res, next) {
  var shoppingcartId = req.swagger.params['shoppingcart_id'].value;
  var productId = req.swagger.params['product_id'].value;
  var quantity = req.swagger.params['quantity'].value;
  var size = req.swagger.params['size'].value;
  var colour = req.swagger.params['colour'].value;
  

  var result = ShoppingCartProduct.shoppingcartsShoppingcartIdProductsPost(shoppingcartId, productId, quantity, size, colour);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(201);
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.shoppingcartsShoppingcartIdProductsProductIdGet = function shoppingcartsShoppingcartIdProductsProductIdGet (req, res, next) {
  var shoppingcartId = req.swagger.params['shoppingcart_id'].value;
  var productId = req.swagger.params['product_id'].value;
  

  var result = ShoppingCartProduct.shoppingcartsShoppingcartIdProductsProductIdGet(shoppingcartId, productId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.shoppingcartsShoppingcartIdProductsProductIdPut = function shoppingcartsShoppingcartIdProductsProductIdPut (req, res, next) {
  var shoppingcartId = req.swagger.params['shoppingcart_id'].value;
  var productId = req.swagger.params['product_id'].value;
  var quantity = req.swagger.params['quantity'].value;
  var size = req.swagger.params['size'].value;
  var colour = req.swagger.params['colour'].value;
  

  var result = ShoppingCartProduct.shoppingcartsShoppingcartIdProductsProductIdPut(shoppingcartId, productId, quantity, size, colour);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.shoppingcartsShoppingcartIdProductsProductIdDelete = function shoppingcartsShoppingcartIdProductsProductIdDelete (req, res, next) {
  var shoppingcartId = req.swagger.params['shoppingcart_id'].value;
  var productId = req.swagger.params['product_id'].value;
  

  var result = ShoppingCartProduct.shoppingcartsShoppingcartIdProductsProductIdDelete(shoppingcartId, productId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(204);
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.writeHead(204).end();
};
