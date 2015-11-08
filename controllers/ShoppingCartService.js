'use strict';

var dummyData = [];

exports.dummyData = dummyData;

exports.shoppingcartsPost = function(customerId, sessionId) {
	var shoppingcart_id = customerId + sessionId;

	dummyData.push(
		{
			shoppingcart_id: shoppingcart_id,
			customer_id: customerId,
			session_id: sessionId,
			create_date: new Date(),
			products: []
		}
	);

	return dummyData[dummyData.length - 1];  
}

exports.shoppingcartsShoppingcartIdDelete = function(shoppingcartId) {
	for (var idx = 0; idx < dummyData.length; idx++) {
		var currentShoppingCart = dummyData[idx];

		if (currentShoppingCart.shoppingcart_id === shoppingcartId) {
			dummyData.splice(idx, 1);
		}
	}
}
