let datum = new Date();
let uur = datum.getHours();
let minuut
if (datum.getMinutes() < 10){
    minuut = "0" + datum.getMinutes();
} else{
    minuut = datum.getMinutes();
}

let tijdstip = uur + ":" + minuut;

let begroeting;
if (uur >= 7 && uur < 12){
    begroeting = "Goedemorgen";
} else if (uur >= 12 && uur < 18){
    begroeting = "Goede dag";
} else {
    begroeting = "Goede avond";
}

document.getElementById("uitkomst").innerHTML = begroeting + ", het is nu " + tijdstip;