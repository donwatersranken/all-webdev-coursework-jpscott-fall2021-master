const $ = selector => document.querySelector(selector);



function makeChange(total) {
    

    let quarters = total/25
    total= total%25
    let dimes   =   total / 10
    total= total%10  
    let nickels = total/ 5
    total= total%5
    let pennies = total
    $("#quarters").value =Math.floor(quarters);
    $("#dimes").value = Math.floor(dimes);
    $("#nickels").value = Math.floor(nickels);
    $("#pennies").value = pennies;

    console.log (67 % 25)
}

function processEntries() {
    let total = parseInt($("#cents").value);
    
    if ((!isNaN(total)) && total > 0 && total < 99) {
        makeChange(total);
    } else {
        alert("number must be between 1 and 99")
    }
    
} 
    

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
})