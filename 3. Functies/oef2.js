function verschilTussen100(getal){
    return 100 - getal;
}

let getal = parseInt(prompt("Geef een getal in"));
document.getElementById("uitkomst").innerHTML = "100 - " + getal + " = " + verschilTussen100(getal);