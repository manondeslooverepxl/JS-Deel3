let getal = parseInt(prompt("Geef een getal in van 1 tem 10", "1-10"));

while (getal < 0 || getal > 10 ){
    alert("Niet mogelijk!");
    getal = parseInt(prompt("Geef een getal in van 1 tem 10", "1-10"));
}

let maalTafels = "";
let maalUitkomst;
for (let i = 1; i < 11; i++){
    maalUitkomst = getal * i;
    maalTafels = maalTafels + i + " * " + getal + " = " + maalUitkomst + "<br>";
}

document.getElementById("uitkomst").innerHTML = maalTafels;