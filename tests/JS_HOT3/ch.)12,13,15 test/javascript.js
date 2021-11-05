


function proscessSubmit() {
    
    if (document.getElementById("firstName").value === "") {
        document.getElementById("fn").innerHTML="*required"
    } else(
        document.getElementById("fn").innerHTML=""
    );

    if (document.getElementById("lastName").value === "") {
        document.getElementById("ln").innerHTML="*required"
    }else(
        document.getElementById("ln").innerHTML=""
    );

    if (document.getElementById("address").value === "") {
        document.getElementById("addressSpan").innerHTML="*required"
    }else(
        document.getElementById("addressSpan").innerHTML=""
    );

    if (document.getElementById("city").value === "") {
        document.getElementById("citySpan").innerHTML= "*required"
    }else(
        document.getElementById("citySpan").innerHTML=""
    );

}

function proscessReset() {
     document.getElementById("firstName").value= "";
     document.getElementById("lastName").value= "";
     document.getElementById("address").value= "";
     document.getElementById("city").value= "";
     document.getElementById("state").selectedIndex =0;
     document.getElementById("zipcode").value= "";
     document.getElementById("department").selectedIndex =0;
     document.getElementById("salary").value= "";
}
function proscessSearch() {
    console.log();
}
function proscessTotals() {
    console.log();
}




document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit").addEventListener("click", proscessSubmit);
    document.getElementById("reset").addEventListener("click", proscessReset);
    document.getElementById("search").addEventListener("click", proscessSearch);
    document.getElementById("totals").addEventListener("click", proscessTotals);
})