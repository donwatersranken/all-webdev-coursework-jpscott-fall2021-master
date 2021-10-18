"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];


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

function displayResults() {
	let nameHighScore= "";
	let nameHighScorenum= 0;
	for (let x = 0; x < names.length; x++) {
		let score=scores[x]
		if (nameHighScorenum < score) {
			nameHighScorenum= scores[x]
			nameHighScore= names[x]
		}
	}
	let HighScore = "high score = "+nameHighScore+" with a score of "+nameHighScorenum+"<br>"
		console.log(nameHighScorenum);
	let averge= 0;
	let sum= 0;
	for (let index = 0; index < scores.length; index++) {
		let score1 = scores[index] ;
		sum=sum+score1;
	}
	averge="average score = "+(sum/scores.length).toFixed(0)+"<br>";

	document.getElementById("resultsLabel").innerHTML="results";
	document.getElementById("results").innerHTML=averge+HighScore;
}

function displayScores() {
	let list = ""
	console.log("test2");
	for (let i = 0; i < names.length; i++) {
		 let name = names[i];	
		 let score = scores[i];	
		 let nameScore = name + "       " + score + "<br>";
		 list+=nameScore;
	}
	console.log("test1");
	document.getElementById("scoresLabel").innerHTML="Scores";
	document.getElementById("scores").innerHTML=list;
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});