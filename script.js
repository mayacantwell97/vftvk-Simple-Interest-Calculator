function calculate()
{ //Get the values and calculate
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
//Calculate the interest and text
    document.getElementById("result").innerHTML="If you deposit <div id="highlight" "+principal+",>\<br\>at an interest rate of <div id="highlight" "+rate+"% >\<br\>You will receive an amount of <div id ="highlight"+interest+">,\<br\>in the year <div id ="highlight"+"+year+"\<br\>"

    //get for null value in Amount borrowed
    if (principal < 1) {
    alert("Please enter the amount borrowed");
        document.getElementById("principal").focus();

    };
}
// check for validate amount
function validate() {
    var principal = document.getElementById("principal").value;
    var negativeValue = parseInt(principal) < 0;
    if (!negativeValue) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
//move the slider value
function updateRate()
{
var rateval = document.getElementById("rate").value;
document.getElementById("rate_val").innerText= "rateval";
}
