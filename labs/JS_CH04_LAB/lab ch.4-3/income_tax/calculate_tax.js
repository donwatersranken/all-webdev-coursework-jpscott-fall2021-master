"use strict";
const $ = selector => document.querySelector(selector);


	
function calulateTax(income) {
	let tax = 0;
	if (income > 518400) {
		 tax = 156235 + ((income - 518400)*.37);
	} else if (income > 207350 && income < 518400) {
		 tax = 47367.50 + ((income - 207350)*.35);
	}else if (income > 163300 && income <207350) {
		 tax = 33271.50 + ((income - 163300)*.32);
	}else if (income > 85525 && income <163300) {
		 tax = 14605.50 + ((income - 85525)*.24);
	}else if (income > 40125 && income <85525) {
		 tax = 4617.50 + ((income - 40125)*.22);
	}else if (income > 9875 && income <= 40125) {
		 tax = 987.5 + ((income - 9875) * .12);
	}else (income <= 9875) 
		tax = income *.1;
	$("#tax").value = tax
}


function processEntry(){
	let income = parseInt($("#income").value);
	
	
	if (!isNaN(income) && income > 0) {
		calulateTax(income)
		
	} else {
		alert("you need to enter a number and it need to be greater then 0")
	}
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});