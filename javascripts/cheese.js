"use strict";

	var CheesePrices = {
		"Provolone": 1.00,
		"Pepperjack": 1.00,
		"Cheddar": 1.00,
		"Swiss": 1.00
	};
 function addCheese(cheese) {
	return CheesePrices[cheese];
}

module.exports = addCheese;