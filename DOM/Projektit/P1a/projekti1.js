function tarkastaLomake() {
    var nimi = document.getElementById("nimi").value;
    console.log(nimi);
    var salasana = document.getElementById("salasana").value;
    let checkbox = document.getElementsByName("checkbox");
    luku = 0;
    var lempi = document.getElementById("lempiaine").value;
    var kehitys = document.getElementById("kehitys").value;
    var kayttaja = document.querySelector('input[name="kayttaja"]:checked');
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {
            luku++;
        }          
    }
    if (kayttaja) {
        kayttaja = kayttaja.value;
    }
    if (nimi.length < 6) {
        alert("Anna v�hint��n 6 merkki� pitk� nimi!");
    }
    else if (salasana < 12) {
        alert("Anna v�hint��n 12 merkki� pitk� salasana");
    }
    else if (!kayttaja) {
        alert("Valitse, millainen koneen k�ytt�j� olet!");
    }

    else if (luku == 0) {
        alert("Kerro, mit� mielt� olet sivuistani!");
    }
    else if (lempi == "") {
        alert("Valitse lempiaineesi");
    }
    else if (!kehitys) {
        alert("Anna palautetta!")
    }
    else {
        alert("Kiitos palautteesta. Annoit seuraavat tiedot: \nNimi: " + nimi + "\nsalasana: " + salasana + "\nOlet seuraavanlainen koneenkayttaja "
            + kayttaja + "\nlempiaineesi on: " + lempi + "\nja palautteesi on: " + kehitys);
    }
    
}