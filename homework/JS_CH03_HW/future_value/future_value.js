"use strict";

// get investment amount - loop until user enters a number
let investment = 0;
do {
    investment = parseFloat(
        prompt("Enter investment amount as xxxxx.xx", 10000));
}
while ( isNaN(investment) );

// get interest rate - loop until user enters a number
let rate = 0;
do {
    rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
}
while ( isNaN(rate) );

// get number of years - loop until user enters a number
let years = 0;

do {
    years = parseInt(prompt("Enter number of years", 10));
}
while ( isNaN(years) );
// get number of years
let month = years * 12
// calulate future value
// yearly value
let futureValue = investment;
for (let i = 1; i <= years; i++ ) {
    futureValue += futureValue * rate / 100;
}
futureValue = parseInt(futureValue);

// monthy value
let futureValueMonth = investment;
for (let i = 1; i <= years; i++ ) {
    futureValueMonth += futureValueMonth * rate / 100 /12;
}
futureValueMonth = parseInt(futureValueMonth);

// display results
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future yearly Value:</label> ${futureValue.toFixed(2)}</p>`);
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
document.write(`<p><label>months:</label> ${month}</p>`);
document.write(`<p><label>Future monthly Value:</label> ${futureValueMonth.toFixed(2)}</p>`);