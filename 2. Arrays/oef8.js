function getDays(jaar,maand){
    return new Date(jaar, maand, 0).getDate();
}

let dagenInMaanden = [];
for(i = 1; i<13; i++){
    dagenInMaanden[i - 1] = getDays(2021, i);
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

for(let i = 1; i < dagenInMaanden[1] + 1; i++){
    if(i<10){
        dagText = "0" + i;
    } else{
        dagText = i;
    }
    console.log(dagText + "/" + maandText + "/" + vandaag.getFullYear() );
}