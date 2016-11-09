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