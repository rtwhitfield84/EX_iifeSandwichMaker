var SandwichMaker = (function(maker) {
	var CondimentPrices = {
		"Mustard": 0.10,
		"Mayonaise": 0.10,
		"RedPeppers": 0.10,
		"OilVinegar": 0.10
	};
maker.addCondiments = function(condiment) {
	return CondimentPrices[condiment];
};
return maker;
})(SandwichMaker);
