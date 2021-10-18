let $ = function (id) {return document.getElementById(id);};

function process() {
    console.log("test1")
    let age= parseFloat($("textBox").value);

    if (isNaN(age)) {
        alert("please enter your age!")
    }
    else if ((age <=0) || (age>=200) ){
        alert("age out of range!")
    }
    else if (age >0 && age <=20) {
        alert("you're not old enough!")
    }
     else if ( (age >= 20)&&(age <= 199)){alert("welcome to the venue!")}
     

}

document.addEventListener("DOMContentLoaded", () => {
    $("button").addEventListener("click", process)
})