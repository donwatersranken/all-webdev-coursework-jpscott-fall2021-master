"use strict";

$(document).ready( () => {
    $("#calculate").click( () => {
        let isValid = true;

        let total = $("#cents").val();
        total = parseInt(total);
        isValid = validateChange(total);

        let quarters = total/25
        total= total%25
        let dimes   =   total / 10
        total= total%10  
        let nickels = total/ 5
        total= total%5
        let pennies = total
        $("#quarters").val(Math.floor(quarters));
        $("#dimes").val(Math.floor(dimes));
        $("#nickels").val(Math.floor(nickels));
        $("#pennies").val (pennies);
    

    }); // end click() method
    

    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() method

const validateChange = (total) => {
    total = parseInt(total);

    if (isNaN(total)){
        alert("Please enter a valid number.")
        $("#cents").val("");
        $("#cents").focus();
        return false;
        
    }
    else if (cents < 1 || cents > 99) {
        alert("Please enter a valid number.")
        return false;
    }
    else {
        return true;
    };
};