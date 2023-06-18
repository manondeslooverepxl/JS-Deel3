let opleidingen = ["DVO", "Programmeren", "Netwerken", "Toegepaste Informatica"];
opleidingen.push("Multimedia- en Communicatietechnologie");

let lijst = "";
for(let i = 0; i < opleidingen.length; i++){
    lijst += opleidingen[i] + "<br>";
}
document.getElementById("lijst").innerHTML = lijst;