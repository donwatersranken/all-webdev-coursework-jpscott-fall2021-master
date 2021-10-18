let $ = function(id) {
    return document.getElementById(id);
};

let joinList = function() {
	let emailAddress1 = $("email_address1").value;
	let emailAddress2 = $("email_address2").value;
	let isValid = true;
	
	if (emailAddress1 === "") { 
		$("email_address1_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else { $("email_address1_error").firstChild.nodeValue = ""; } 

	if (emailAddress1 !== emailAddress2) { 
		$("email_address2_error").firstChild.nodeValue = "This entry must equal first entry.";
		isValid = false;
	} else { $("email_address2_error").firstChild.nodeValue = ""; }     
        
	if ($("first_name").value === "") {
		$("first_name_error").firstChild.nodeValue = 
                        "This field is required.";
		isValid = false;
	} else { $("first_name_error").firstChild.nodeValue = ""; }  
	
	if (isValid) {
		$("email_form").submit(); 
	}
};

window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
};
