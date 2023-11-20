function tarkastaLomake() {
    var nimi = document.getElementById("nimi").value;
    var sahkoposti = document.getElementById("email").value;
    var ika = document.getElementById("ika").value;
    var suosikki = document.getElementById("suosikki").value;
    var kouluun = document.querySelector('input[name="kouluun"]:checked');
    var koulusta = document.querySelector('input[name="koulusta"]:checked');
    var kouluruoka = document.querySelector('input[name="kouluruoka"]:checked');
    var energiajuoma = document.querySelector('input[name="energiajuoma"]:checked');
    var kommentti = document.getElementById("kommentti").value;
    
    
    if (kouluun) {
        kouluun = kouluun.value;
    }
    if (koulusta) {
        koulusta = koulusta.value;
    }
    if (kouluruoka) {
        kouluruoka.value;
    }
    if (energiajuoma) {
        energiajuoma.value;
    }
    if (nimi.length < 6) {
        alert("Anna v�hint��n 6 merkki� pitk� nimi!");
    }
    else if (!emailIsValid(sahkoposti)) {
        alert("Anna oikea s�hk�postiosoitteesi");
        lomake.email.focus();
        return false;
    }
    else if (suosikki == "") {
        alert("Valitse, mik� on suosikkiajanavietteesi");
    }

    else if (!kouluun) {
        alert("Kerro, mill� tulit kouluun");
    }
    else if (!koulusta) {
        alert("Kerro, mill� l�hdet koulusta");
    }
    else if (!kehitys) {
        alert("Anna palautetta!")
    }
    else {
        alert("Kiitos palautteesta. Annoit seuraavat tiedot: \nNimi: " + nimi + "\nsalasana: " + salasana + "\nOlet seuraavanlainen koneenkayttaja "
            + kayttaja + "\nlempiaineesi on: " + lempi + "\nja palautteesi on: " + kehitys);
    }
    
}
function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}