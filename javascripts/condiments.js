"use strict";

	var CondimentPrices = {
		"Mustard": 0.10,
		"Mayonaise": 0.10,
		"RedPeppers": 0.10,
		"OilVinegar": 0.10
	};
	function addCondiments(condiment) {
	return CondimentPrices[condiment];
}

module.exports = addCondiments;