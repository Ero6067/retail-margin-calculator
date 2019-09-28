/**
 * @name Retail Calculator Controller
 *
 * @copyright (C) 2019 Kris Lafrance.
 * @author Kris Lafrance
 *
 */
"use strict";

const formBody = document.querySelector(".card-body");
const buyAmount = document.getElementById("itemCost");
const sellAmount = document.getElementById("retailPrice");

document
	.getElementById("calculate-form")
	.addEventListener("submit", function(e) {
		clearAll();
		retailPrice();
		e.preventDefault();
	});

let retailPrice = () => {
	const value = parseFloat(buyAmount.value);
	sellAmount.value = calculatePrice(value);

	if (sellAmount.value === "Error") {
		sellAmount.style.background = "red";
		console.log("Error");
	}
	if (sellAmount.value === "Ask Management") {
		sellAmount.style.background = "yellow";
		sellAmount.style.color = "black";
	}
};
function clearAll() {
	sellAmount.style.background = "white";
	sellAmount.style.color = "black";
	sellAmount.value = "";
}
// Calculation and rounding
let calculatePrice = price => {
	let num = (Math.ceil((price * 2) / 5) * 5);
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
	} else if (num > 202) {
		return "Ask Management";
	} else {
		return "Error";
	}
};
