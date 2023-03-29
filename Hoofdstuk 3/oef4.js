function startMetHallo(zin){
    let hallo = zin.slice(0,5);
    hallo = hallo.toLowerCase();
    if(hallo == "hallo"){
        return zin;
    } else {
        zin = "Hallo " + zin;
        return zin;
    }
}
let zin = prompt("geef een zin");
document.getElementById("uitkomst").innerHTML = startMetHallo(zin);