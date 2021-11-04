"use strict";
let currentdate = new Date();
let currentMonth = currentdate.getMonth();
let currentyear = currentdate.getFullYear();
let endOfMonth= new Date();

const getMonthText = () => {
	
	
	if (currentMonth === 0) { return "January"; }
	else if (currentMonth === 1) { return "February"; }
	else if (currentMonth === 2) { return "March"; }
	else if (currentMonth === 3) { return "April"; }
	else if (currentMonth === 4) { return "May"; }
	else if (currentMonth === 5) { return "June"; }
	else if (currentMonth === 6) { return "July"; }
	else if (currentMonth === 7) { return "August"; }
	else if (currentMonth === 8) { return "September"; }
	else if (currentMonth === 9) { return "October"; }
	else if (currentMonth === 10) { return "November"; }
	else if (currentMonth === 11) { return "December"; }

	
};
function daysInMonth(params) {
	endOfMonth.setMonth( endOfMonth.getMonth()+1);
	endOfMonth.setDate( 0 );
	console.log(endOfMonth.getDate());
}

// const getLastDayofMonth = () => {
// 	endOfMonth= new Date();
// 	endOfMonth.setMonth( endOfMonth.getMonth() +1 );
// 	endOfMonth.setDate( 0 );
// };
const calenderdays =()=>{
	let beginningOfMonth=new Date(currentdate.getFullYear(),currentdate.getMonth(),1);
	let count = 1;
	for (let index = 0; index < 5; index++) {
		let row = document.createElement("tr");
		for (let cell = 0; cell < 7; cell++) {
			let day= document.createElement("td")
			 
			if (count<=endOfMonth.getDate() && (beginningOfMonth.getDay()==cell || count>1)) {
				day.textContent=count++
			}
			row.appendChild(day)
		}
		 document.getElementById("calendar").appendChild(row)
	}
	
};

$(document).ready(function(){
document.getElementById("month_year").innerHTML = getMonthText() +" "+ currentyear

daysInMonth()
calenderdays()
});

