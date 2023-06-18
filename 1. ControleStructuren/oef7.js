let datum = new Date();
let maand;
switch (datum.getMonth()){
    case 0:
        maand = "Januari";
        break;
    case 1:
        maand = "Februari";
        break;
    case 2:
        maand = "Maart";
        break;
    case 3:
        maand = "April";
        break;
    case 4:
        maand = "Mei";
        break;
    case 5:
        maand = "Juni";
        break;
    case 6:
        maand = "Juli";
        break;
    case 7:
        maand = "Augustus";
        break;
    case 8:
        maand = "September";
        break;
    case 9:
        maand = "Oktober";
        break;
    case 10:
        maand = "November";
        break;
    case 11:
        maand = "December";
        break;
}
document.getElementById("uitkomst").innerHTML = maand;