var SandwichMaker = (function(maker) {
	var VeggiePrices = {
		"Lettuce": 0.10,
		"Onion": 0.10,
		"Tomato": 0.10,
		"Pickels": 0.10,
	};
maker.addVeggies = function(veggie) {
	return VeggiePrices[veggie];
};
return maker;
})(SandwichMaker);
