"use strict";

// const region1 = [1540, 1130, 1580, 1105];
// const region2 = [2010, 1168, 2305, 4102];
// const region3 = [2450, 1847, 2710, 2391];
// const region4 = [1845, 1491, 1284, 1575];
// const region5 = [2120, 1767, 1599, 3888];

let region1 = [1540, 1130, 1580, 1105];
let region2 = [2010, 1168, 2305, 4102];
let region3 = [2450, 1847, 2710, 2391];
let region4 = [1845, 1491, 1284, 1575];
let region5 = [2120, 1767, 1599, 3888];

let q1 = (1540 + 2010 + 2450 + 1845 + 2120);
let q2 = (1130 + 1168 + 1847 + 1491 + 1767);
let q3 = (1580 + 2305 + 2710 + 1284 + 1599);
let q4 = (1105 + 4102 + 2391 + 1575 + 3888);

let r1 = (1540 + 1130 + 1580 + 1105);
let r2 = (2010 + 1168 + 2305 + 4102);
let r3 = (2450 + 1847 + 2710 + 2391);
let r4 = (1845 + 1491 + 1284 + 1575);
let r5 = (2120 + 1767 + 1599 + 3888);

let total = (r1 + r2 + r3 + r4 + r5);

document.write(`<h2>Sales by Quarter:</h2>`)
document.write(`Q1: $${q1}<br>`); 
document.write(`Q2: $${q2}<br>`);
document.write(`Q3: $${q3}<br>`);
document.write(`Q4: $${q4}<br><br>`);

document.write(`<h2>Sales by Region:</h2>`)
document.write(`Region 1: $${r1}<br>`);
document.write(`Region 2: $${r2}<br>`);
document.write(`Region 3: $${r3}<br>`);
document.write(`Region 4: $${r4}<br>`);
document.write(`Region 5: $${r5}<br><br>`);

document.write(`<h2>Total Sales:</h2>`);
document.write(`$${total}`);