"use strict";


	var VeggiePrices = {
		"Lettuce": 0.10,
		"Onion": 0.10,
		"Tomato": 0.10,
		"Pickels": 0.10,
	};
	function addVeggies(veggie) {
	return VeggiePrices[veggie];
}

module.exports = addVeggies;