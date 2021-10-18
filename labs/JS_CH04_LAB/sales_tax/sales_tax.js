let $ = function (id) {
    return document.getElementById(id); 
};
const getErrorMsg = lbl => `${lbl} Subtotal must be between 0 and  10,000 Tax Rate must be between 0 and 12.`;

const proscessEnteries = () =>{
 const subtotal = parseFloat ($("subtotal").value);
 const tax_rate = parseFloat ($("tax_rate").value);

    if (!isNaN(subtotal) && subtotal > 0 && subtotal < 10000   && !isNaN(tax_rate) && tax_rate > 0 && tax_rate < 12){

        let sales_tax = (subtotal / tax_rate);
    
        $("sales_tax").value= sales_tax.toFixed(2)

        let total = (subtotal / sales_tax)

        $("total").value = total.toFixed(2);
    }
     
}

document.addEventListener("DOMContentLoaded", () => {
    $("calculate").addEventListener("click", proscessEnteries)
    $("clar")
})