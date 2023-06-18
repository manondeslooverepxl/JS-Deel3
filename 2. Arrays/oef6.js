let honden = ["Shiba", "Bulldog", "Golden", "Lab", "Whiskey", "Shoob", "Borzoi", "Puppy", "Pupper", "Good Boy"];
honden.unshift("Hond", "Dog", "Chien", "Hund", "Perro");
honden.pop();
honden.shift();

let hondenlijst = "";
for(let i = 0; i < honden.length; i++){
    console.log(honden[i]);
    hondenlijst += honden[i] + "<br>";
}
document.getElementById("uitkomst").innerHTML = hondenlijst;