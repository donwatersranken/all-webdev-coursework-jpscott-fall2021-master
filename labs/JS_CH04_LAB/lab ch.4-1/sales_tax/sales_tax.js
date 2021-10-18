let $ = function (id) {
    return document.getElementById(id); 
};

const getErrorMsg2 = function (){
    return `Subtotal must be > 0 and < 10000 Tax Rate must be > 0 and < 12`;
}


const getErrorMsg = lbl => `${lbl}Subtotal must be > 0 and < 10000
Tax Rate must be > 0 and < 12hi`;

const proscessEnteries = () =>{
 const subtotal = parseFloat ($("subtotal").value);
 const tax_rate = parseFloat ($("tax_rate").value);

    if (!isNaN(subtotal)  && subtotal > 0 && subtotal < 10000   &&  !isNaN(tax_rate) && tax_rate > 0 && tax_rate < 12){
        let sales_tax =(subtotal / tax_rate);
        $("sales_tax").value = sales_tax.toFixed(2);
        let total = (subtotal + sales_tax);
        $("total").value =total.toFixed(2);
    }else{
        alert (getErrorMsg2);
    }
     
};
let clearEntries = () => {
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
    $("subtotal").focus();
};
let subtotalClear = () => {
    $("subtotal").value = "";
}
let tax_rateClear = () => {
    $("tax_rate").value = "";
}

document.addEventListener("DOMContentLoaded", () => {
    $("calculate").addEventListener("click", proscessEnteries);
    $("clear").addEventListener("click", clearEntries);
    $("subtotal").addEventListener("click", subtotalClear)
    $("tax_rate").addEventListener("click", tax_rateClear)
})