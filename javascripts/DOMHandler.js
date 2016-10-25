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
    selectedTopping = event.target.value;
    finalSandwichPrice = SandwichMaker.addTopping(SandwichMaker.addBread(selectedTopping));
});
meatChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    finalSandwichPrice = SandwichMaker.addTopping(SandwichMaker.addMeat(selectedTopping));
});
cheeseChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    finalSandwichPrice = SandwichMaker.addTopping(SandwichMaker.addCheese(selectedTopping));
});

veggiesChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    finalSandwichPrice = SandwichMaker.addTopping(SandwichMaker.addVeggies(selectedTopping));
});

condimentsChooser.addEventListener("change", function(event) {
    selectedTopping = event.target.value;
    finalSandwichPrice = SandwichMaker.addTopping(SandwichMaker.addCondiments(selectedTopping));
});


orderTotal.addEventListener("click", function(event) {
  if (event.target === totalBtn) {
    orderTotal.innerHTML += `<h1>Your sandwich cost: ${(finalSandwichPrice).toFixed(2)}</h1>`;
  }
});





















