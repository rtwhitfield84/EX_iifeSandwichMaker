var SandwichMaker = (function(maker) {

  var MeatPrices = {
  	"RoastBeef": 1.25,
  	"Turkey": 1.25,
  	"Ham": 1.25,
  	"Bacon": 1.00
  };

   maker.addMeat = function (meat) {
    return MeatPrices[meat];
  };  
  return maker;
})(SandwichMaker);
