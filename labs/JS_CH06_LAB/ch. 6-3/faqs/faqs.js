"use strict";
const $ = selector => document.querySelector(selector);

// the event handler for the click event of each h2 element
const toggle = evt => {
	const h2Element = evt.currentTarget;               // get the clicked h2
	const divElement = h2Element.nextElementSibling;   // get h2's sibling div
	const h2Elements = document.querySelectorAll("#faqs h2")
	
	// for (let index = 0; index < h2Elements.length; index++) {
	// 	const h2tag = h2Elements[index];
	// 	h2tag.classList.remove("minus");
	// 	h2tag.nextElementSibling.classList.remove("open");
	// }
	for (const h2tag of h2Elements) {
		h2tag.classList.remove("minus");
		h2tag.nextElementSibling.classList.remove("open");
	}
	
	h2Element.classList.toggle("minus");
	divElement.classList.toggle("open");
	
	evt.preventDefault();           // cancel default action of h2's child <a>
};

document.addEventListener("DOMContentLoaded", () => {
	// get the h2 tags
	const h2Elements = document.querySelectorAll("#faqs h2");
	
	// attach event handler for each h2 tag
	for (let h2Element of h2Elements) {
		h2Element.addEventListener("click", toggle);
	}

	// set focus on first h2 tag's <a> tag
	h2Elements[0].firstChild.focus();
	
	
});

// Add code to the toggle() function so only one answer can be displayed at a time. 

// To do that, create an array of the h2 elements. 

// Then, use a for-of loop to go through the h2 elements in the array and remove the class attribute for all h2 elements that aren’t the one that has been clicked.

// You also need to remove the class attributes for all of the div siblings of the h2 elements that weren’t clicked.