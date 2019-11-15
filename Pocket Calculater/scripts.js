//Global
var val1;
var val2;
var op="0";

function addition()
{
    
    val1 = document.getElementById("resultScreen").value;
    var res = document.getElementById("resultScreen").value;
    res ="";
    document.getElementById("resultScreen").value = res;
    
    op="+";
}
function subtraction()
{
    
    val1 = document.getElementById("resultScreen").value;
    var res = document.getElementById("resultScreen").value;
    res ="";
    document.getElementById("resultScreen").value = res;
    
    op="-";
}
function multiplication()
{
    
    val1 = document.getElementById("resultScreen").value;
    var res = document.getElementById("resultScreen").value;
    res ="";
    document.getElementById("resultScreen").value = res;
    
    op="*";
}
function division()
{
    
    val1 = document.getElementById("resultScreen").value;
    var res = document.getElementById("resultScreen").value;
    res ="";
    document.getElementById("resultScreen").value = res;
    
    op="/";
}

function funcCalculate(){
    val2 = document.getElementById("resultScreen").value;
    var res = document.getElementById("resultScreen").value;
    res ="";

   
    switch(op)
    {
        case "+":
        {
            var result = parseFloat(val1) + parseFloat(val2);
            document.getElementById("resultScreen").value = result;
            return;
        }

        case "-":
        {
            var result = parseFloat(val1) - parseFloat(val2);
            document.getElementById("resultScreen").value = result;
            return;
        }

        case "*":
        {
            var result = parseFloat(val1) * parseFloat(val2);
            document.getElementById("resultScreen").value = result;
            return;
        }

        case "/":
        {
            var result = parseFloat(val1) / parseFloat(val2);
            document.getElementById("resultScreen").value = result;
            return;
        }
    }
    
}



function funcClear(){
    var res = document.getElementById("resultScreen").value;
    res ="";   
    document.getElementById("resultScreen").value = res;
}
function funcOne(){
    var res = document.getElementById("resultScreen").value;
    res +="1";   
    document.getElementById("resultScreen").value = res;
}
function funcTwo(){
    var res = document.getElementById("resultScreen").value;
    res +="2";   
    document.getElementById("resultScreen").value = res;
}
function funcThree(){
    var res = document.getElementById("resultScreen").value;
    res +="3";   
    document.getElementById("resultScreen").value = res;
}
function funcFour(){
    var res = document.getElementById("resultScreen").value;
    res +="4";   
    document.getElementById("resultScreen").value = res;
}
function funcFive(){
    var res = document.getElementById("resultScreen").value;
    res +="5";   
    document.getElementById("resultScreen").value = res;
}
function funcSix(){
    var res = document.getElementById("resultScreen").value;
    res +="6";   
    document.getElementById("resultScreen").value = res;
}
function funcSeven(){
    var res = document.getElementById("resultScreen").value;
    res +="7";   
    document.getElementById("resultScreen").value = res;
}
function funcEight(){
    var res = document.getElementById("resultScreen").value;
    res +="8";   
    document.getElementById("resultScreen").value = res;
}
function funcNine(){
    var res = document.getElementById("resultScreen").value;
    res +="9";   
    document.getElementById("resultScreen").value = res;
}
function funcZero(){
    var res = document.getElementById("resultScreen").value;
    res +="0";   
    document.getElementById("resultScreen").value = res;
}
function funcPoint(){
    var res = document.getElementById("resultScreen").value;
    res +=".";   
    document.getElementById("resultScreen").value = res;
}