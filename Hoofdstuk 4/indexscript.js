/*
// Voorbeeld 1
// // let leeftijd = parseInt(prompt("Geef je leeftijd"));

let persoon = {
    voornaam: "Manon",
    achternaam: "Desloovere",
    beroep: "Student",
    leeftijd: 18,
    rijbewijs: false,
    uiterlijk: {
        ogen: "blauw",
        haarkleur: "blond",
    },
    volledige_naam: function () {
        return this.voornaam + " " + this.naam;
    }
}
//Drie verschillende opties//
// document.getElementById("uitkomst").innerText = persoon.voornaam;
// document.getElementById("uitkomst").innerText = persoon.volledige_naam();
document.getElementById("uitkomst").innerText = persoon["voornaam"];

delete persoon.uiterlijk;
delete persoon.volledige_naam;
persoon.kleurOgen = "blauw";
console.log(persoon)

*/


// Voorbeeld 2
let telefoon = {
    merk: "Apple",
    uitvoering: "Iphone 11",
    homebutton: false,
    grootte: "6.1 Inch",
    cameras: 2,
    geheugen: "64GB"
}

let eigenschap;
let uitkomst = "";

// manier 1
for (eigenschap in telefoon) {
    uitkomst = uitkomst + telefoon[eigenschap] + "<br>";
}
document.getElementById("uitkomst").innerHTML = uitkomst;
// of op deze manier (zo werken falses & trues wel deftig
for (eigenschap in telefoon) {
    if (telefoon[eigenschap] === true) {
        uitkomst = uitkomst + eigenschap + ": " + "Ja" + "<br>";
    }
    else if (telefoon[eigenschap] === false) {
        uitkomst = uitkomst + eigenschap + ": " + "Nee" + "<br>";
    }
    else {
        uitkomst = uitkomst + eigenschap + ": " + telefoon[eigenschap] + "<br>";
    }
}
/*
document.getElementById("uitkomst").innerHTML = uitkomst;

let telefoonArray = Object.values(telefoon);
console.log(telefoon);
console.log(telefoon.Array);

let teller;
uitkomst = "";
for (teller in telefoonArray) {
    uitkomst = uitkomst + telefoonArray[teller] + "<br>";
}
document.getElementById("uitkomst").innerHTML = uitkomst;
*/
