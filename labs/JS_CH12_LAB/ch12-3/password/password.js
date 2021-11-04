"use strict";
let passwordLength=document.getElementById('num').value;
let password;


const getRandomNumber = () =>{
     
   for (let index = 0; index < passwordLength.length; index++) { 
       password.push();
       
   }
}

// const getRandomNumber = max => {
// 	let random = null;
// 	if (!isNaN(max)) {
// 		random = Math.random();             // value >= 0.0 and < 1.0
// 		random = Math.floor(random * max);  // value is an integer between 0 and max - 1
// 		random = random + 1;                // value is an integer between 1 and max
// 	}
// 	return random;
// };

$(document).ready( () => {
    $("#generate").click( () => {
        console.log(document.getElementById('num').value);


        $("#password").val( "" ); // clear previous entry
    
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        
    }); // end click()
    
    $("#clear").click( () => {
        $("#num").val( "" );
        $("#password").val( "" );
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()





document.getElementById("num").val
