function verwijderTeken(zin, getal){
    let arr = [];
    if (getal < 0 || getal > zin.length){
        alert("NO!!!!!");
    } else{
        arr[0] = zin.substring(0, getal - 1);
        arr[1] = zin.substring(getal, zin.length);
        return arr;
    }
}
let zin = prompt("Geef een zin in");
let getal = parseInt(prompt("Geef een getal in (niet langer dan zin)"));
let zinnen = verwijderTeken(zin, getal);

alert("Zin 1: " + zinnen[0]);
alert("Zin 2: " + zinnen[1]);