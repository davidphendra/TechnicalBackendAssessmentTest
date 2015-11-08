'use strict';

var ShoppingCart = require('./ShoppingCartService');

exports.shoppingcartsShoppingcartIdProductsGet = function(shoppingcartId) {
    var dummyData = ShoppingCart.dummyData;

    for (var idx = 0; idx < dummyData.length; idx++) {
        var currentShoppingCart = dummyData[idx];

        if (currentShoppingCart.shoppingcart_id === shoppingcartId) {
            return currentShoppingCart.products;
        }
    }

    return null;
}

exports.shoppingcartsShoppingcartIdProductsPost = function(shoppingcartId, productId, quantity, size, colour) {
    var dummyData = ShoppingCart.dummyData;

    for (var idx = 0; idx < dummyData.length; idx++) {
        var currentShoppingCart = dummyData[idx];

        if (currentShoppingCart.shoppingcart_id === shoppingcartId) {
            var shoppingcart_product = {
                product_id: productId,
                quantity: quantity,
                size: size,
                colour: colour,
            };

            currentShoppingCart.products.push(shoppingcart_product);

            return shoppingcart_product;
        }
    }

    return null;
}

exports.shoppingcartsShoppingcartIdProductsProductIdGet = function(shoppingcartId, productId) {
    var dummyData = ShoppingCart.dummyData;

    for (var idx = 0; idx < dummyData.length; idx++) {
        var currentShoppingCart = dummyData[idx];

        if (currentShoppingCart.shoppingcart_id === shoppingcartId) {
            for (var productIdx = 0; productIdx < currentShoppingCart.products.length; productIdx++) {
                var currentProduct = currentShoppingCart.products[productIdx];

                if (currentProduct.product_id === productId) {
                    return currentProduct;
                }
            }
        }
    }
    
    return null;
}

exports.shoppingcartsShoppingcartIdProductsProductIdPut = function(shoppingcartId, productId, quantity, size, colour) {
    var dummyData = ShoppingCart.dummyData;

    for (var idx = 0; idx < dummyData.length; idx++) {
        var currentShoppingCart = dummyData[idx];

        if (currentShoppingCart.shoppingcart_id === shoppingcartId) {
            for (var productIdx = 0; productIdx < currentShoppingCart.products.length; productIdx++) {
                var currentProduct = currentShoppingCart.products[productIdx];

                if (currentProduct.product_id === productId) {
                    if (quantity !== undefined) {
                        currentProduct.quantity = quantity;
                    }

                    if (size !== undefined) {
                        currentProduct.size = size;
                    }

                    if (colour !== undefined) {
                        currentProduct.colour = colour;
                    }

                    return currentProduct;
                }
            }
        }
    }

    return null;
}

exports.shoppingcartsShoppingcartIdProductsProductIdDelete = function(shoppingcartId, productId) {
    var dummyData = ShoppingCart.dummyData;

    for (var idx = 0; idx < dummyData.length; idx++) {
        var currentShoppingCart = dummyData[idx];

        if (currentShoppingCart.shoppingcart_id === shoppingcartId) {
            for (var productIdx = 0; productIdx < currentShoppingCart.products.length; productIdx++) {
                var currentProduct = currentShoppingCart.products[productIdx];

                if (currentProduct.product_id === productId) {
                    currentShoppingCart.products.splice(productIdx, 1);
                }
            }
        }
    }
}
