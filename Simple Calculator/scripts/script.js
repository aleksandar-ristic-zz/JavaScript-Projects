/*
*   Simple Calculator
* 
*/

// Main Function
function calculate() {
    
    //Taking numbers and operator from input
    var a = parseFloat(document.querySelector("#integerA").value);
    var b = parseFloat(document.querySelector("#integerB").value);
    var op = document.querySelector("#operators").value;

    // If-else chain for basic arithmetic operations
    if(op === '+') {
        let c = a + b;
        document.getElementById("result").innerHTML = a + " + " + b + " = " + c;

    } else if(op === '-') {
        let c = a - b;
        document.getElementById("result").innerHTML = a + " - " + b + " = " + c;

    } else if(op === '*') {
        let c = a * b;
        document.getElementById("result").innerHTML = a + " * " + b + " = " + c;

    // Making if-else chain inside divison operator, for dividing by zero
    } else if(op ==='/') {
        if(a !== 0) {
            let c = a / b;
        document.getElementById("result").innerHTML = a + " / " + b + " = " + c;

        } else {

            document.getElementById("result").innerHTML = "Result is Infinity!";
        }
        
    //If some other character is entered inside operator input field
    } else {
        document.getElementById("result").innerHTML = "Use only: +, -, * and /";
    }

} 