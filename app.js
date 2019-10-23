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
	//let num = Math.ceil((price * 2) / 5) * 5;
	let num = Math.round((price * 2) / 5) * 5 - 0.01;
	console.log(num);
	if (num <= 29.99) {
		return num.toFixed(2);
	} else if (num >= 30 && num <= 55) {
		return (num - 5).toFixed(2);
	} else if (num >= 60 && num <= 100) {
		return (num - 10).toFixed(2);
	} else if (num >= 105 && num <= 125) {
		return (num - 15).toFixed(2);
	} else if (num >= 130 && num <= 150) {
		return (num - 20).toFixed(2);
	} else if (num >= 155 && num <= 175) {
		return (num - 25).toFixed(2);
	} else if (num >= 180 && num <= 205) {
		return (num - 30).toFixed(2);
	} else if (num > 205.01) {
		return "Ask Management";
	} else {
		return "Error";
	}
};

// Get current year for the copyright
$("#year").text(new Date().getFullYear());
