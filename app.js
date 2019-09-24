"use strict";

document.getElementById().addEventListener("submit", function(e) {
	e.preventDefault();
});

// let calculatePrice = num => {
let amount = document.getElementById("itemCost");
const value = parseFloat(amount.value);

// Calculation and rounding
let calculatePrice = price => {
	let num = Math.ceil((price * 2) / 5) * 5;
	if (num <= 25) {
		console.log(num - 0.01);
	} else if (num >= 30 && num <= 55) {
		console.log(num - 5.01);
	} else if (num >= 60 && num <= 100) {
		console.log(num - 10.01);
	} else if (num >= 105 && num <= 125) {
		console.log(num - 15.01);
	} else if (num >= 130 && num <= 150) {
		console.log(num - 20.01);
	} else if (num >= 155 && num <= 175) {
		console.log(num - 25.01);
	} else if (num >= 180 && num <= 205) {
		console.log(num - 30.01);
	} else if (num > 205) {
		console.log("Ask Management");
	}
};

calculatePrice(37.4);
