function telDeKlinkers(zin) {
    let arr = zin.split("");
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
        switch (arr[i]) {
            case "a":
                total += 1;
                break;
            case "e":
                total += 1;
                break;
            case "i":
                total += 1;
                break;
            case "o":
                total += 1;
                break;
            case "u":
                total += 1;
                break;
        }
    }
    return total;
}

let zin = prompt("Geef een zin in");
alert(zin + " (Klinkers: " + telDeKlinkers(zin) + ")");