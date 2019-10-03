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
	if (num <= 25) {
		return num.toFixed(2);
	} else if (num >= 29.99 && num <= 55) {
		return (num - 5).toFixed(2);
	} else if (num >= 29.99 && num <= 55) {
		return (num - 5).toFixed(2);
	} else if (num >= 59.99 && num <= 100) {
		return (num - 10).toFixed(2);
	} else if (num >= 104.99 && num <= 125) {
		return (num - 15).toFixed(2);
	} else if (num >= 129.99 && num <= 150) {
		return (num - 20).toFixed(2);
	} else if (num >= 154.99 && num <= 175) {
		return (num - 25).toFixed(2);
	} else if (num >= 179.99 && num <= 205) {
		return (num - 30).toFixed(2);
	} else if (num > 201.99) {
		return "Ask Management";
	} else {
		return "Error";
	}
};

// Get current year for the copyright
$("#year").text(new Date().getFullYear());
