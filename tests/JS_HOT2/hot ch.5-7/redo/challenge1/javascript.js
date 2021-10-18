const $ = selector => document.querySelector(selector);



let goodEmail = "admin@example.com"; 
let goodPassWord = "password";
let forgottenu = "you seem to have fogotten your username."
let forgottenp = "you seem to have fogotten your password."
let wrongUser = "this is not the right user"
let wrongpassword= 'this is not the rigt password'

console.log("test1");





function processAccount() {
    let emailInput = $("#emailInput").value;
    let passwordInput = $("#passWordInput").value

        if (emailInput === "") {
            $("#warningError1").innerHTML = forgottenu
        } else if (emailInput != goodEmail){
            $("#warningError1").innerHTML = wrongUser
        } 

        if(passwordInput === ""){
            $("#warningError2").innerHTML = forgottenp
        }else if (emailInput != goodPassWord){
            $("#warningError2").innerHTML = wrongpassword
        }

    
};

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#signInInput").addEventListener("click", processAccount);
	
});
