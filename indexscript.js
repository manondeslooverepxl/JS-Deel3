/* Eerste Voorbeeld

let leeftijd = parseInt (prompt ( "Geef je leeftijd in."));

if (leeftijd <= 12) {
    alert("Je bent" + leeftijd + "Je krijgt een Happy Meal! Smakelijk!")
}
else {
    alert("Je krijgt geen Happy Meal, sorry!")
}
*/

// Tweede Voorbeeld
/*
let gsmstuk = prompt("Is je gsm stuk?", "ja, nee");
let gespaardbedrag = parseInt (prompt ("Hoeveel heb je op dit moment al gespaard voor een nieuwe gsm (in Euro)"));

gsmstuk = gsmstuk.toUpperCase();

if (gsmstuk === "JA" && gespaardbedrag >= 1000) {
    document.getElementById("uitkomst").innerHTML = "Je mag de nieuwe iphone 14 kopen"
}
else if  (gsmstuk === "JA" && gespaardbedrag >= 500) {
    document.getElementById("uitkomst").innerHTML = "Je kan een oudere versie kopen van Iphone. Of een kijkje nemen naar een ander merk"
}

else {
    document.getElementById("uitkomst").innerHTML = "Je moet nog even sparen ..."
}
*/



// Derde Voorbeeld

/*
let gsmstuk = prompt("Is je gsm stuk?", "ja, nee");

gsmstuk = gsmstuk.toUpperCase();

if (gsmstuk === "JA") {
    let gespaardbedrag = parseInt(prompt("Hoeveel heb je op dit moment al gespaard voor een nieuwe gsm (in Euro)"));
    if (gespaardbedrag >= 1000) {
        document.getElementById("uitkomst").innerHTML = "Je mag de nieuwe Iphone 14 kopen"
    }
    else if (gespaardbedrag >= 500) {
        document.getElementById("uitkomst").innerHTML = "Je kan een oudere versie kopen van Iphone. Of een kijkje nemen naar een ander merk"
    }
    else {
        document.getElementById("uitkomst").innerHTML = "Je mag een goedkopere android kopen"
    }
}
else {
            document.getElementById("uitkomst").innerHTML = "Je moet nog even sparen ..."
}
*/




// Vierde voorbeeld (als je if else niet mag gebruiken maak je gebruik van switch)
/*
let dag;
switch (new Date().getDay()) {
    case 0:
        dag = "zondag";
        break;
    case 1:
        dag = "maandag";
        break;
    case 2:
        dag = "dinsdag";
        break;
    case 3:
        dag = "woensdag";
        break;
    case 4:
        dag = "donderdag";
        break;
    case 5:
        dag = "vrijdag";
        break;
    case 6:
        dag = "zaterdag";

}

alert("Het is vandaag" + dag + ".");

*/


// Vijfde voorbeeld

/*
let geboortedatumingave = prompt("Geef uw geboortedatum in", "DD-MM-JJJJ")
let dagingave = geboortedatumingave.substring(0, 2);
let maandingave = geboortedatumingave.substring(3, 5);
let jaaringave = geboortedatumingave.substring(6, 10);
let geboortedatumISO = new Date ( jaaringave + "-" + maandingave + "-" +  dagingave);

console.log(dagingave);
console.log(maandingave);
console.log(jaaringave);
console.log(geboortedatumISO);

switch (geboortedatumISO.getDay()) {
    case 0:
        dag = "zondag";
        break;
    case 1:
        dag = "maandag";
        break;
    case 2:
        dag = "dinsdag";
        break;
    case 3:
        dag = "woensdag";
        break;
    case 4:
        dag = "donderdag";
        break;
    case 5:
        dag = "vrijdag";
        break;
    case 6:
        dag = "zaterdag";

}

alert("Je bent geboren op een" + geboortedatumISO + ".");
*/

/*

// Zesde voorbeeld

let teller = 0;
let maaltafel = parseInt(prompt("Geef een getal tussen 1 en 10 voor de bijhorende maaltafels te krijgen."));
let maaltafelUitkomst;
let uitkomst = "";

while (teller < 10) {
    teller++;
    maaltafelUitkomst = teller * maaltafel;
    uitkomst = uitkomst + teller + "x" + maaltafel + "=" + maaltafelUitkomst + "<br>";
}

document.getElementById("uitkomst").innerHTML = uitkomst;

*/

// Zevende voorbeeld

/*
let teller = 0;
let maaltafel = parseInt(prompt("Geef een getal tussen 1 en 10 voor de bijhorende maaltafels te krijgen."));
let maaltafelUitkomst;
let uitkomst = "";

do {
    teller++;
    maaltafelUitkomst = teller + maaltafel;
    uitkomst = uitkomst + teller + "x" + maaltafel + "=" + maaltafelUitkomst + "<br>";
}

while (teller <10);

document.getElementById("uitkomst").innerHTML = uitkomst;
*/

// Achtste voorbeeld
/*
let uitkomst = "";
for(let teller = 1; teller <= 10; teller++) {
    uitkomst = uitkomst + "De teller staat op" + teller + ".<br>";
}
document.getElementById("uitkomst").innerHTML = uitkomst;

*/
// Negende voorbeeld

let uitkomst = "";
let maaltafel = parseInt(prompt("Geef een getal tussen 1 en 10 voor de bijhorende maaltafels te krijgen."));
let maaltafelUitkomst;

for(let teller = 1; teller <= 10; teller++) {
    maaltafelUitkomst = teller * maaltafel;
    maaltafelUitkomst = uitkomst + "De teller staat op" + teller + ".<br>";
}
document.getElementById("uitkomst").innerHTML = uitkomst;
