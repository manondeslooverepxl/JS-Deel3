let nummers = [0,1,2,3,4,5,6,7,8,9];

let uitkomst = "Standaard lijst:<br>"
for (let i=0; i<nummers.length; i++){
    uitkomst += " " + nummers[i];
}
uitkomst += "<br><br>"

//voeg nummers toe op plaats 3
nummers.splice(3, 0,2.3, 2.6);

uitkomst += "Voeg 2.3 en 2.6 toe op plaats 3:<br>";
for (let i=0; i<nummers.length; i++){
    uitkomst += " " + nummers[i];
}
uitkomst += "<br><br>"

//verwijder 3 items op plaats 6
nummers.splice(6, 3);
uitkomst += "Verwijder 3 items vanaf plaats 6:<br>";
for (let i=0; i<nummers.length; i++){
    uitkomst += " " + nummers[i];
}
console.log(uitkomst);
document.getElementById("uitkomst").innerHTML = uitkomst;