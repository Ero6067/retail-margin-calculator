/**
 * @name Retail Calculator Staff Controller
 *
 * @copyright (C) 2019 Kris Lafrance.
 * @author Kris Lafrance
 *
 */
"use strict";

const staffBuyAmount = document.getElementById("staffItemCost");
const staffSellPrice = document.getElementById("staffPrice");
const staffPercentage = 1.15;

document
	.getElementById("staff-calculate-form")
	.addEventListener("submit", e => {
		clearAll();
		staffPrice();
		e.preventDefault();
	});

let staffPrice = () => {
	const value = parseFloat(staffBuyAmount.value);
	staffSellPrice.value = calcStaffPrice(value);
};

function clearAll() {
	staffSellPrice.value = "";
}

let calcStaffPrice = price => {
	console.log(price * staffPercentage);
	price = price * staffPercentage;
	return price.toFixed(2);
};
