"use strict";

	
	var BreadPrices = {
		"Wheat": 1.10,
		"White": 1.20,
		"Rye": 1.30,
		"French": 1.40,
		"Wrap": 1.50
	};
  function addBread (bread) {
    return BreadPrices[bread];
  }

module.exports = addBread;