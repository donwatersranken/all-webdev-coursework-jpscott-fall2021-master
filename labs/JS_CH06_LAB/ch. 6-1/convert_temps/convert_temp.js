"use strict";
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9 / 5 + 32;



const toggleDisplay = (label1Text, label2Text) => {
	 $("#degree_label_1").innerHTML = label1Text; 
	 $("#degree_label_2").innerHTML = label2Text;
}

/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => {
 let temp= parseFloat($("#degrees_entered").value);
 console.log(temp);
	if (isNaN(temp)) {
		$("#message").innerHTML = "you must enter a valid number for degrees.";
	} else {
		if ($("#to_celsius").checked) {
			$("#degrees_computed").value = calculateCelsius(temp).toFixed(0);
		} else{
			$("#degrees_computed").value = calculateFahrenheit(temp).toFixed(0);
		}
	}
	
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");



document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	$("#degrees_entered").focus();
});