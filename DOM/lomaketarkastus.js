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
    if (enimi == "") {
        alert("Anna etunimesi");
    }
    else if (snimi == "") {
        alert("Anna sukunimesi");
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