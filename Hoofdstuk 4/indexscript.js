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

