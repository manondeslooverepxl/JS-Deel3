let geboorteDatum = prompt("Wat is jouw geboortedatum?", "dag/maand/jaar bvb: 06/02/1996");
let dateArr = geboorteDatum.split("/");
let jaar = parseInt(dateArr[2]);

let leeftijd = 2023 - jaar;
console.log(leeftijd);

if (leeftijd > 20){
    alert("Je bent oud genoeg om de informatie op deze webpagina te bekijken.");
}
