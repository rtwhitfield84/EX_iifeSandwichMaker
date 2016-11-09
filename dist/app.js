(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Sandy1 = require('./SandwichMaker.js');
var bread = require('./bread.js');
var meat = require('./meat.js');
var cheese = require('./cheese.js');
var veggies = require('./veggies.js');
var condies = require('./condiments.js');

var finalSandwichPrice = 0;

var selectedTopping;

var breadChooser = document.getElementById("bread");
var meatChooser = document.getElementById("meat");
var cheeseChooser = document.getElementById("cheese");
var veggiesChooser = document.getElementById("veggies");
var condimentsChooser = document.getElementById("condiments");
var orderTotal = document.getElementById("sandwhichTotal");
var totalBtn = document.getElementById("totalBtn");

breadChooser.addEventListener("change", function(event) {
    console.log("hi");
    selectedTopping = event.target.value;
    // console.log(Sandy1(bread(selectedTopping)));
    finalSandwichPrice = Sandy1(bread(selectedTopping));
});
meatChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    finalSandwichPrice = Sandy1(meat(selectedTopping));
});
cheeseChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    finalSandwichPrice = Sandy1(cheese(selectedTopping));
});

veggiesChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    finalSandwichPrice = Sandy1(veggies(selectedTopping));
});

condimentsChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    finalSandwichPrice = Sandy1(condies(selectedTopping));
});


orderTotal.addEventListener("click", function(event) {
  if (event.target === totalBtn) {
    orderTotal.innerHTML += `<h1>Your sandwich cost: ${(finalSandwichPrice).toFixed(2)}</h1>`;
  }
});






















},{"./SandwichMaker.js":2,"./bread.js":3,"./cheese.js":4,"./condiments.js":5,"./meat.js":6,"./veggies.js":7}],2:[function(require,module,exports){
"use strict";


  var totalPrice = 0;

    function addTopping (toppingPrice) {
      return totalPrice += toppingPrice;
    }

module.exports = addTopping;












},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
"use strict";


  var MeatPrices = {
  	"RoastBeef": 1.25,
  	"Turkey": 1.25,
  	"Ham": 1.25,
  	"Bacon": 1.00
  };

  function addMeat (meat) {
    return MeatPrices[meat];
  } 

module.exports = addMeat;
},{}],7:[function(require,module,exports){
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
},{}]},{},[1]);
