let aantalLijnen = 7;
let pyramide = "";
let sterretje = "";
for(let i = 0; i < aantalLijnen; i++){
    sterretje = sterretje +  "*";
    console.log(sterretje);
    pyramide = pyramide + sterretje + "<br>"
}
document.getElementById("uitkomst").innerHTML = pyramide;