/*
*   Zapremina Valjka App
* 
*/

// Osnovna funkcija
function calculate() {

    // Preuzimanje klijentskog dela unosa
    var r = document.querySelector("#radius").value;
    var h = document.querySelector("#height").value;

    // Izracunavanje zapremine
    var v = ((parseInt(r) ** 2) * Math.PI * parseInt(h)).toFixed(2);
    
    // Izbacivanje rezultata
    document.getElementById("volume").innerHTML = "V = r<sup>2</sup> * π * H <br> V= " + v;
}