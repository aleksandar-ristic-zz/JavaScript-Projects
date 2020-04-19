/*
*   Simple Calculator
* 
*/

function calculate() {

    var a = parseFloat(document.querySelector("#integerA").value);
    var b = parseFloat(document.querySelector("#integerB").value);
    var op = document.querySelector("#operators").value;


    if(op === '+') {
        let c = a + b;
        document.getElementById("result").innerHTML = a + " + " + b + " = " + c;

    } else if(op === '-') {
        let c = a - b;
        document.getElementById("result").innerHTML = a + " - " + b + " = " + c;

    } else if(op === '*') {
        let c = a * b;
        document.getElementById("result").innerHTML = a + " * " + b + " = " + c;

    } else if(op ==='/') {
        if(a !== 0) {
            let c = a / b;
        document.getElementById("result").innerHTML = a + " / " + b + " = " + c;

        } else {

            document.getElementById("result").innerHTML = "Result is Infinity!";
        }
        

    } else {
        document.getElementById("result").innerHTML = "Use only: +, -, * and /";
    }

} 