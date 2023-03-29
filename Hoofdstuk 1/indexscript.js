// Eerste Voorbeeld
/*
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

/*
let uitkomst = "";
 /*
let maaltafel = parseInt(prompt("Geef een getal tussen 1 en 10 voor de bijhorende maaltafels te krijgen."));
let maaltafelUitkomst;

for(let teller = 1; teller <= 10; teller++) {
    maaltafelUitkomst = teller * maaltafel;
    maaltafelUitkomst = uitkomst + "De teller staat op" + teller + ".<br>";
}
document.getElementById("uitkomst").innerHTML = uitkomst;
*/




// Tiende voorbeeld

// let werkdagen = new Array ()

/* let werkdagen = [];

werkdagen[0] = "maandag";
werkdagen[1] = "dinsdag";
werkdagen[2] = "woensdag";
werkdagen[3] = "donderdag";
werkdagen[4] = "vrijdag";

*/




// Elfde voorbeeld
/*
let werkdagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"];
let uitkomst = "";

for (let teller = 0; teller < werkdagen.length; teller++){
    uitkomst += werkdagen [teller] + "<br>";
}

document.getElementById("uitkomst").innerHTML = uitkomst;

 */




// Twaalfde Voorbeeld
/*
// Join - van een array met meerdere waardes naar string
//Join - van een array met meerdere waardes naar een string
let werkdagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"];
console.log(werkdagen.join(" - "))

//Split - van een string naar een array met meerdere waardes
let werkdagenZin = "maandag - dinsdag - woensdag - donderdag - vrijdag";
console.log(werkdagenZin.split(" - "));

// Sort - sorteren van een waarde in een array van A (hoofdletter) naar z (kleine letter)
let werkdagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"];
console.log(werkdagen.sort());

// Reverse - De volgorde van de waardes in de array omdraaien
let werkdagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"];
console.log(werkdagen.reverse());

// Push - 1 of meerdere waardes aan het einde van de array toevoegen
let werkdagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"];
console.log(werkdagen.push("zaterdag", "zondag"));
console.log(werkdagen);

// pop - 1 waarde aan het begin van de array verwijderen
// pop = verwijdert het laatste element van een array
let werkdagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"];
 console.log(werkdagen.pop());

// shift - 1 waarde aan het begin van de array verwijderen, tonen als output en daarna weg
let werkdagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"];
console.log(werkdagen.shift());

// concat - twee arrays samenvoegen tot 1 array
let werkdagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"];
let weekenddagen  = ["zaterdag", "zondag"]
let alleDagen = werkdagen.concat(weekenddagen);
console.log(alleDagen);
 */
