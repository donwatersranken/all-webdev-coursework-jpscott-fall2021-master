"use strict"

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const $ = selector => document.querySelector(selector);

const addScore = () => {
	// get user entries
	const name = $("#name").value;
	const score  = parseInt( $("#score").value );
	let isValid = true;
    
    // check entries for validity
    if (name == "") {
		$("#name").nextElementSibling.textContent = "This field is required.";
		isValid = false;
	} else {
		$("#name").nextElementSibling.textContent = "";
	}
	
	if (isNaN(score) || score < 0 || score > 100) {
		$("#score").nextElementSibling.textContent = "You must enter a valid score.";
		isValid = false;
	} else {
		$("#score").nextElementSibling.textContent = "";
	}
	
	if (isValid) {
		names.push(name);
		scores.push(score);
	    $("#name").value = "";
		$("#score").value = "";
	}
    $("#name").focus();
	console.log(names);
	console.log(scores);
};

function asdf() {
	let list = ""

	for (let i = 0; i < names.length; i++) {
		 let name = names[i]	
		 let score = scores[i]	
		 let nameScore = name + " = " + score + "\n"
		 list+=nameScore
	}
	document.getElementById("scores_display").value=list;
}

document.addEventListener("DOMContentLoaded", () => {
	$("#add").addEventListener("click", addScore);
	$("#display_scores").addEventListener("click", asdf);
	$("#name").focus();
});
