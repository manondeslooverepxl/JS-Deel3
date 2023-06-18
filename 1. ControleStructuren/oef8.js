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

let dag;
switch (datum.getDay()){
    case 0:
        dag = "Zondag";
        break;
    case 1:
        dag = "Maandag";
        break;
    case 2:
        dag = "Dinsdag";
        break;
    case 3:
        dag = "Woensdag";
        break;
    case 4:
        dag = "Donderdag";
        break;
    case 5:
        dag = "Vrijdag";
        break;
    case 6:
        dag = "Zaterdag";
        break;

}

document.getElementById("uitkomst").innerHTML = begroeting + ", het is nu " + dag + " " + tijdstip;