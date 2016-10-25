var SandwichMaker = (function(maker) {
	var CheesePrices = {
		"Provolone": 1.00,
		"Pepperjack": 1.00,
		"Cheddar": 1.00,
		"Swiss": 1.00
	};
maker.addCheese = function(cheese) {
	return CheesePrices[cheese];
};
return maker;
})(SandwichMaker);
