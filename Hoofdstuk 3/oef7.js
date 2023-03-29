function alleWoordenStartenMetHoofdletter(zin){
    let arr = zin.split(" ");
    let uitkomst = "";
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
        uitkomst += arr[i] + " ";
    }
    return uitkomst;
}

let zin = "Deze oefeningen zijn héél leuk";
document.getElementById("uitkomst").innerHTML = alleWoordenStartenMetHoofdletter(zin);