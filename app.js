"use strict";
document
	.getElementById("calculate-form")
	.addEventListener("submit", function(e) {
		console.log("test");
		retailPrice();
		e.preventDefault();
	});

let retailPrice = () => {
	const buyAmount = document.getElementById("itemCost");
	const sellAmount = document.getElementById("retailPrice");
	const value = parseFloat(buyAmount.value);
	console.log(value);
	sellAmount.value = calculatePrice(value);
};

// Calculation and rounding
let calculatePrice = price => {
	let num = Math.ceil((price * 2) / 5) * 5;
	if (num <= 25) {
		return num - 0.01;
	} else if (num >= 30 && num <= 55) {
		return num - 5.01;
	} else if (num >= 60 && num <= 100) {
		return num - 10.01;
	} else if (num >= 105 && num <= 125) {
		return num - 15.01;
	} else if (num >= 130 && num <= 150) {
		return num - 20.01;
	} else if (num >= 155 && num <= 175) {
		return num - 25.01;
	} else if (num >= 180 && num <= 205) {
		return num - 30.01;
	} else if (num > 205) {
		return "Ask Management";
	}
};
