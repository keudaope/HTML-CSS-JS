function tarkastaLomake() {
    var enimi, snimi, kouluun, lempiaine;
    enimi = document.getElementById("enimi").value;
    snimi = document.getElementById("snimi").value;
    kouluun = document.querySelector('input[name="kouluun"]:checked');
    if (kouluun) {
        kouluun = kouluun.value;
    }
    lempiaine = document.getElementById("lempitunti").value;
    //alert(enimi + snimi + kouluun + lempiaine + ""); 
    if (enimi.length < 3) {
        alert("Anna vähintään 3 kirjaiminen etunimi");
    }
    else if (snimi.length < 5) {
        alert("Anna vähintään 5 kirjaiminen sukunimi");
    }
    else if (!kouluun) {
        alert("Kerro, millä  tulit kouluun");
    }
    else if (lempiaine == "") {
        alert("Valitse lempiaineesi");
    }
    else {
        alert("Kiitos tiedoista!");
    }


}