function getDays(jaar,maand){
    return new Date(jaar, maand, 0).getDate();
}
let dagenNaam = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

let dagenInMaanden = [];
for(i = 1; i<13; i++){
    dagenInMaanden[i - 1] = getDays(2023, i);
}
let vandaag = new Date();
let maand = new Date().getMonth();
let maandText;
if(maand + 1 <10){
    maandText = "0" + (maand +1);
} else{
    maandText = (maand +1);
}
let dagText;
let dagNaam;

for(let i = 1; i < dagenInMaanden[1] + 1; i++){
    if(i<10){
        dagText = "0" + i;
    } else{
        dagText = i;
    }
    dagNaam = dagenNaam[new Date(vandaag.getFullYear(), maand, i - 1).getDay()];

    console.log(dagNaam + ", " + dagText + "/" + maandText + "/" + vandaag.getFullYear() );
}