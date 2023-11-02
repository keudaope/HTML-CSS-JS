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
        alert("Anna vähintään 6 merkkiä pitkä nimi!");
    }
    else if (salasana < 12) {
        alert("Anna vähintään 12 merkkiä pitkä salasana");
    }
    else if (!kayttaja) {
        alert("Valitse, millainen koneen käyttäjä olet!");
    }

    else if (luku == 0) {
        alert("Kerro, mitä mieltä olet sivuistani!");
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