function vermenigvuldig(getal1, getal2){
    return getal1 * getal2;
}
let getal1 = parseInt(prompt("Geef een getal in"));
let getal2 = parseInt(prompt("Geef nog een getal in"));

document.getElementById("uitkomst").innerHTML = getal1 + " * " + getal2 + " = " + vermenigvuldig(getal1, getal2);