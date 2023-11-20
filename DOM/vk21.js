function posneg() {
    var luku = parseInt(document.getElementById("arvo").value);
    if (luku >= 0) {
        console.log("luku on positiivinen");
    }
    else {
        console.log("luku on negatiivinen");
    }
}
function vkp() {
    var vkp = parseInt(document.getElementById("vkp").value);
    switch (vkp) {
        case 1:
            console.log("Maanantai");
            break;
        case 2:
            console.log("Tiistai");
            break;
        case 3:
            console.log("Keskiviikko");
            break;
        case 4:
            console.log("Torstai");
            break;
        case 5:
            console.log("Perjantai");
            break;
        case 6:
            console.log("Lauantai");
            break;
        case 7:
            console.log("Sunnuntai");
            break;
        default:
            console.log("Et antanut oikeaa numeroa. Anna välillä 1-7");
    }
}
function karkaus() {
    let kvuosi = parseInt(document.getElementById("vuosi"));
    if (kvuosi % 4 == 0 && kvuosi % 100 != 0) {
        console.log("Vuosi on karkausvuosi");
    }
    else if (kvuosi % 400 == 0) {
        console.log("Vuosi on karkausvuosi");
    }
    else {
        console.log("Vuosi ei ole karkausvuosi");
    }
}

function summaJaKA() {
    var l1, l2, l3, l4, l5, summa;
    l1 = parseInt(document.getElementById("l1").value);
    l2 = parseInt(document.getElementById("l2").value);
    l3 = parseInt(document.getElementById("l3").value);
    l4 = parseInt(document.getElementById("l4").value);
    l5 = parseInt(document.getElementById("l5").value);
    summa = l1 + l2 + l3 + l4 + l5;
    console.log("Lukujen summa on " + summa + " ja keskiarvo on " + summa / 5);
}
function kertotaulu() {
    var luku = parseInt(document.getElementById("luku").value);
    var lause = "";
    for (var i = 1; i <= 10; i++) {
        lause += "luku " + luku + "*" + i + "=" + luku * i + "\n";
    }
    console.log(lause);
}
function laskePisteet() {
    var pisteet = 0;
    var annettuSana = document.getElementById('scsana').value;
    for (var i = 0; i < annettuSana.length; i++) {
        switch (annettuSana[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'n':
            case 's':
            case 't':
            case 'A':
            case 'E':
            case 'I':
            case 'N':
            case 'S':
            case 'T':
                pisteet++;
                break;
            case 'o':
            case 'ä':
            case 'k':
            case 'l':
            case 'O':
            case 'Ä':
            case 'K':
            case 'L':
                pisteet += 2;
                break;
            case 'u':
            case 'm':
            case 'U':
            case 'M':
                pisteet += 3;
                break;
            case 'y':
            case 'h':
            case 'j':
            case 'p':
            case 'r':
            case 'v':
            case 'Y':
            case 'H':
            case 'J':
            case 'P':
            case 'R':
            case 'V':
                pisteet += 4;
                break;
            case 'ö':
            case 'd':
            case 'Ö':
            case 'D':
                pisteet += 7;
                break;
            case 'b':
            case 'f':
            case 'g':
            case 'B':
            case 'F':
            case 'G':
                pisteet += 8;
                break;
            case 'c':
            case 'C':
                pisteet += 10;
                break;
            default:
                pisteet += 12;
        }
        document.getElementById('tscrabble').innerHTML = "<p>Sanan " + annettuSana + " pisteet ovat: " + pisteet + "</p>";
    }
}