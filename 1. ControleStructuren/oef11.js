let aantalLijnen = parseInt(prompt("Geef een getal tussen 0 en 10", "0-10"));
while (aantalLijnen <= 0 || aantalLijnen >= 10){
    alert("Niet mogelijk");
    aantalLijnen = parseInt(prompt("Geef een getal tussen 0 en 10", "0-10"));
}

let pyramide = "";
let sterretje = "";
for(let i = 0; i < aantalLijnen; i++){
    sterretje = sterretje +  "*";
    console.log(sterretje);
    pyramide = pyramide + sterretje + "<br>"
}
document.getElementById("uitkomst").innerHTML = pyramide;