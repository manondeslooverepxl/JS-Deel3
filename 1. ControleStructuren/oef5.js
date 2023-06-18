let getal = parseInt(prompt("Geef een random getal in"));
let uitkomst;
if (getal < 50){
    uitkomst = "te laag";
} else if ( getal == 50){
    uitkomst = "Proficiat, goed gegokt!";
} else{
    uitkomst = "te hoog";
}
console.log = uitkomst;
document.getElementById("uitkomst").innerHTML = uitkomst;