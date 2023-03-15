let aantalLijnen = parseInt(prompt("Geef een getal tussen 0 en 10", "0-10"));
while (aantalLijnen <= 0 || aantalLijnen >= 10){
    alert("Niet mogelijk");
    aantalLijnen = parseInt(prompt("Geef een getal tussen 0 en 10", "0-10"));
}

let pyramide = "";
let sterretje = "";
for(let i = 0; i < aantalLijnen; i++){
    for (let j = aantalLijnen - i; j > 0; j--){
        sterretje += "_"
    }
    for (let k = 0; k < aantalLijnen; k++){
        sterretje += "*"
        console.log(sterretje);
    }
}
document.getElementById("uitkomst").innerHTML = pyramide;
