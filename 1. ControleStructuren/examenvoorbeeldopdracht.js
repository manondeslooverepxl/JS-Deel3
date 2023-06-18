// OPDRACHT
// Vraag aan de bezoeker een random zin zonder of met leesteken (! . ?) op het einde.
// Plaats achter ieder waard van de zin een BEEP
// Het optionele leesteken op het einde moet ALTIJD achteraan blijven staan.
// Plaats de nieuwe zin op de webpagina

// Voorbeeldingave: Dit is een random zin
// Voorbeelduitkomst: Dit BEEP is BEEP een BEEP random BEEP zin BEEP.


// Oplossing 1: Zonder leesteken (=makkelijker)
/*
let zin = prompt("Geef een willekeurige zin in. Gelieve geen leestekens te gebruiken.", "Typ hier je zin.");

let zinArray = zin.split(" ");

for (let teller = 0; teller = zinArray.length; teller++) {
    zinArray[teller] = zinArray[teller] + " BEEP "
}
 zin = zinArray.join(" ");
document.getElementById("uitkomst").innerHTML = zin;

*/

// Oplossing 2: Met leesteken (=moeilijker)
let zin = prompt("Geef een willekeurige zin in. Je mag kiezen of je achteraan de zin een leesteken gebruikt.", "Typ hier je zin.");
let zinArray = zin.split(" ");
let laatsteWoord;


for (let teller = 0; teller = zinArray.length; teller++) {
    if (teller === zinArray.length - 1) {
        laatsteWoord = zinArray[teller];
        if (laatsteWoord.substring(laatsteWoord.length - 1, laatsteWoord.length) === ".") {
            laatsteWoord = laatsteWoord.substring(0, (zinArray[teller].length - 1));
            zinArray[teller] = laatsteWoord + " BEEP. ";
        }

        else if (laatsteWoord.substring(laatsteWoord.length - 1, laatsteWoord.length) === "!") {
            laatsteWoord = laatsteWoord.substring(0, (zinArray[teller].length - 1));
            zinArray[teller] = laatsteWoord + " BEEP! ";
        }

        else if (laatsteWoord.substring(laatsteWoord.length - 1, laatsteWoord.length) === "?") {
            laatsteWoord = laatsteWoord.substring(0, (zinArray[teller].length - 1));
            zinArray[teller] = laatsteWoord + " BEEP? ";
        }
        else {
            zinArray[teller] = laatsteWoord + "BEEP";
        }
    }
    else {
        zinArray[teller] = zinArray[teller] + " BEEP ";
    }
}
zin = zinArray.join(" ");
document.getElementById("uitkomst").innerHTML = zin;

