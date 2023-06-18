function isVijftig(getal1, getal2){
    let som = getal1 + getal2;
    if(getal1 == 50 || getal2 ==  50 || som == 50){
        return true;
    } else{
        return false;
    }
}
let getal1 = parseInt(prompt("Geef een getal tussen 0 en 100"));
let getal2 = parseInt(prompt("Geef nog een getal tussen 0 en 100"));

if(isVijftig(getal1, getal2)){
    document.getElementById("uitkomst").innerHTML = "Hoera vijftig";
} else{
    document.getElementById("uitkomst").innerHTML = "Je suckt";
}
