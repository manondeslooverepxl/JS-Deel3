let honden = ["Shiba", "Bulldog", "Golden", "Lab", "Whiskey", "Shoob", "Borzoi", "Puppy", "Pupper", "Good Boy"];
let getal = parseInt(prompt("Geef een random getal van 1 tot 10"));
while(getal > 10 || getal < 1){
    alert("Sorry katten niet toegelaten");
    getal = parseInt(prompt("Geef een random getal van 1 tot 10"));
}
document.getElementById("uitkomst").innerHTML = "Jouw hond is een " + honden[getal];