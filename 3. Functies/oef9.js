function grootsteGetal(){
    let getallen = [];
    let getal = "";
    while (getal.toLowerCase() !== "stop"){
        getallen.push(getal);
        getal = prompt("Geef een random getal in. Typ stop om te stoppen");

        console.log("getal: " + getal + " " + typeof getal);
    }
    console.log(getallen);
    let grootste = "";
    for(let i = 0; i < getallen.length; i++){
        console.log(getallen[i] + " > " + grootste);
        if(getallen[i] > grootste){
            grootste = getallen[i];
        }
    }
    return grootste;
}

document.getElementById("uitkomst").innerHTML = grootsteGetal();