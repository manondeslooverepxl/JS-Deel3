let persoon = {
    voornaam: "Manon",
    achternaam: "Desloovere",
    beroep: "Student",
    leeftijd: 18,
    rijbewijs: false,

}

let eigenschap;
let uitkomst = "";

for (eigenschap in persoon) {
    uitkomst = uitkomst + persoon[eigenschap] + "<br>";
}
document.getElementById("uitkomst").innerHTML = uitkomst;