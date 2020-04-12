/*
*   Guess A Number
* 
*/
// We begin by creating a random number
var randomNumber =
Math.round( 10 * Math.random());

// Initialize a count number
var count = 0;

// Making a function which is called when Guess a Number button is pressed
function numberMatch() {

    // get the value from text field
    var number = document.querySelector("#writeNumber").value;
    
    if ( number < randomNumber) {
        document.getElementById("showAnswer").innerHTML = "You guessed too low... try again!";
        count++;
    } else if ( number > randomNumber) {
        document.getElementById("showAnswer").innerHTML = "You guessed too high... try again!";
        count ++;
    } else {
        count++;
        // This is used ONLY if count is 1
        if ( count === 1) {
            document.getElementById("showAnswer").innerHTML = 
            "You guessed correctly. Indeed, it is " + randomNumber + ". It took only " + count + " guess! Amazing job!";
        } else {
            document.getElementById("showAnswer").innerHTML = 
            "You guesed correctly. Indeed, it is " + randomNumber + ". It took you " + count + " guesses. Bravo!";
        }
        // after the correct guess, reset the count
        count = 0;
    }

}
// Showing number on request
function showNumber() {
    document.getElementById("showAnswer").innerHTML = "The number is " + randomNumber + "!";
}

// Making a new number
function newNumber() {
    randomNumber = Math.round( Math.random() * 10);
    document.getElementById("showAnswer").innerHTML = " Number reset and ready!";
    document.querySelector("#writeNumber").value = null; // reset text field
    count = 0; // reset the count
}
