let datum = new Date();
let uur = datum.getHours();
let minuut
if (datum.getMinutes() < 10){
    minuut = "0" + datum.getMinutes();
} else{
    minuut = datum.getMinutes();
}

let tijdstip = uur + ":" + minuut;

let dagdeel;
if (uur >= 12){
    dagdeel = "namiddag";
} else{
    dagdeel = "voormiddag";
}

document.getElementById("uitkomst").innerHTML = "Goede " + dagdeel + ", het is momenteel " + tijdstip +".";
