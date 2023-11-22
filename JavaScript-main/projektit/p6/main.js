function tallenna() {
    let etunimi = document.getElementById('enimi').value;
    let sukunimi = document.getElementById('snimi').value;
    let lahiosoite = document.getElementById('losoite').value;
    let postinumero = document.getElementById('pnro').value;
    let postitoimipaikka = document.getElementById('ptp').value;
    let puhelin = document.getElementById('puh').value;
    let email = document.getElementById('email').value;

    const tiedot = {
        etunimi: etunimi,
        sukunimi: sukunimi,
        osoite: lahiosoite,
        pnro: postinumero,
        ptp: postitoimipaikka,
        sahkoposti: email
    }
    const avain = puhelin;

    window.localStorage.setItem(avain, JSON.stringify(tiedot));
    alert("Tietue lisätty");
    window.location.reload();
}

function hae() { //haetaan tiedot localstoragesta
    var avain = document.getElementById('avain').value; //hakee avaimen lomakkeelta
    var data = JSON.parse(localStorage.getItem(avain)); //Hakee yllä olevalla avaimella LocalStoragesta
    // Luodaan kappale, joka myöhemmin lisätään sivulle
    var kappale = document.createElement("p");
    var kappale2 = document.createElement("p");
    var kappale3 = document.createElement("p");
    // Haetaan JSONista tiedot
    var nimi = document.createTextNode(data.etunimi + " " + data.sukunimi);
    var osoite = document.createTextNode(data.osoite + ", " + data.pnro + ", " + data.ptp);
    var email = document.createTextNode(data.sahkoposti);
    // Luodaan otsikkotekstit ja rivinvaihto
    var teksti = document.createTextNode("Nimi: ");
    var teksti2 = document.createTextNode("Osoite: ");
    var teksti3 = document.createTextNode("Sähköposti: ");
    //var rivinvaihto = document.createElement("br");
    // Lisätään ensimmäinen otsikkoteksti
    kappale.appendChild(teksti);
    // Lisätään nimi JSONista (kts. rivi 35)
    kappale.appendChild(nimi);

    // Lisätään toinen otsikkoteksti
    kappale2.appendChild(teksti2);
    // Lisätään osoite JSONista (kts. rivi 36)
    kappale2.appendChild(osoite);

    // Lisätään toinen otsikkoteksti
    kappale3.appendChild(teksti3);
    // Lisätään sähköposti
    kappale3.appendChild(email);

    // Haetaan paikka HTML:stä (id:n perusteella), johon koko höskä lisätään
    var element = document.getElementById("haetut");
    // Lisätään koko höskä (paragraph) edelliseen kohtaan
    element.appendChild(kappale);
    element.appendChild(kappale2);
    element.appendChild(kappale3);
    setTimeout(function () {
        window.location.reload();
    }, 15000)
}
function poista() { //deletes item from localStorage
    var avain = document.getElementById('avain').value; //gets key from user
    localStorage.removeItem(avain); //passes key to the removeItem method
    alert("Tietue poistettu");
}

