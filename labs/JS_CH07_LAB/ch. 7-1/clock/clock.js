"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");



const displayCurrentTime = () => {
    var now = new Date();
    var hours = now.getHours();
    var ampm = 'AM'; // set default value
  
    // correct hours and AM/PM value for display
    if (hours > 12) {
      // convert from military time
      hours = hours - 12;
      ampm = 'PM';
    } else {
      // adjust 12 noon and 12 midnight
      switch (hours) {
        case 12: // noon
          ampm = 'PM';
          break;
        case 0: // midnight
          hours = 12;
          ampm = 'AM';
      }
    }
  
    $("#hours").firstChild.nodeValue = hours;
    $("#minutes").firstChild.nodeValue = padSingleDigit(now.getMinutes());
    $("#seconds").firstChild.nodeValue = padSingleDigit(now.getSeconds());
    $("#ampm").firstChild.nodeValue = ampm;
};

document.addEventListener("DOMContentLoaded", () => {
    
    displayCurrentTime();
    setInterval(displayCurrentTime,1000)
	// set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
});