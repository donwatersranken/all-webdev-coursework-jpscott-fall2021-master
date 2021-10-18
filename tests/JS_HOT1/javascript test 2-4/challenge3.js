let $ = function (id) {return document.getElementById(id);};
    


function process() {

let num= parseFloat($("textBox").value);

 if (isNaN(num)){alert("please enter a number, not a word.");}
else if (num===1) {alert("One is the lonelist number that you'll ever do.");}
else if (num===2){alert("two can be as bad as one. it's the loneliest number since the number one.");}
else if (num===3){alert("there is no three.");}
else if (num=>4 && num<=0){alert("number is invalid")}

}
document.addEventListener("DOMContentLoaded", () => {
    $("button").addEventListener("click", process)
})