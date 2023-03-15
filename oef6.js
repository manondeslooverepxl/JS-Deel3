let sporten = prompt("Ga je graag sporten?", "Ja/Nee");
sporten = sporten.toUpperCase();
switch(sporten){
    case "JA":
        alert("Just do it!");
        break;
    case "NEE":
        alert("Jammer, blijf dan maar liggen");
        break;
    default:
        alert("Dat was niet duidelijk");
}