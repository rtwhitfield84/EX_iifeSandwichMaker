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





















