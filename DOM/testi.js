function muokkaa() {
    var teksti = document.getElementById("muokattava");
    teksti.style.fontFamily = "Courier";
    teksti.style.color = "red";
    teksti.style.fontSize = "2em";
}
function haeTiedot() {
    var etunimi = document.getElementById("etunimi").value;
    var sukunimi = document.getElementById("sukunimi").value;
    console.log("Etunimi on: " + etunimi + " ja sukunimi on: " + sukunimi);
}
function vaihdaTausta() {
    var teksti = document.getElementById("vaihda");
    teksti.style.backgroundColor = "Yellow";
}
function linkinTiedot() {
    var u = document.getElementById("w3r").href;
    alert('The value of the href attribute of the link is : ' + u);
    var v = document.getElementById("w3r").hreflang;
    alert('The value of the hreflang attribute of the link is : ' + v);
    var w = document.getElementById("w3r").rel;
    alert('The value of the rel attribute of the link is : ' + w);
    var x = document.getElementById("w3r").target;
    alert('The value of the taget attribute of the link is : ' + x);
    var y = document.getElementById("w3r").type;
    alert('The value of the type attribute of the link is : ' + y);
}
function lisaaRivi() {
    var x = document.getElementById('sampleTable').insertRow(0);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    y.innerHTML = "Uusi solu 1";
    z.innerHTML = "Uusi solu 2";
}
function muutaSolu() {
    rivi = document.getElementById("rivi").value;
    solu = document.getElementById("solu").value;
    sisalto = document.getElementById("sisalto").value;
    document.getElementById("taulukko").rows[rivi].cells[solu].innerHTML = sisalto;
}
function luoTaulukko() {
    rivimaara = document.getElementById("rivi").value;
    sarakemaara = document.getElementById("solu").value;

    for (var r = 0; r < parseInt(rivimaara); r++) {
        var x = document.getElementById('taulukko').insertRow(r);
        for (var s = 0; s < parseInt(sarakemaara); s++) {
            var y = x.insertCell(s);
            y.innerHTML = "Rivi" + r + " Sarake" + s;
        }
    }
}
function poistaValinta() {
    var poista = document.getElementById("varit");
    poista.remove(poista.selectedIndex);
}
function laskeElementit() {
    var x = document.getElementById("varit");
    var txt1 = "No. of items : ";
    var i;
    l = document.getElementById("varit").length;
    txt1 = txt1 + l;
    for (i = 0; i < x.length; i++) {
        txt1 = txt1 + "\n" + x.options[i].text;
    }
    alert(txt1);
}
//Ensiksi haetaan kaikki lihavoidut tekstit 
var lihavoidut;
window.onload = haeLihavoidut();

// Ker‰‰ kaikki <strong> tagit
function haeLihavoidut() {
    lihavoidut = document.getElementsByTagName('strong');
}
// K‰y l‰pi kaikki lihavoidut tagit ja muuta niiden v‰ri‰  
function korosta() {
    for (var i = 0; i < lihavoidut.length; i++) {
        lihavoidut[i].style.color = "green";
    }
}

// Kun hiiri poistuu sanan p‰‰lt‰, sana muuttuu mustaksi j‰lleen
function palaaNormaaliin() {
    for (var i = 0; i < lihavoidut.length; i++) {
        lihavoidut[i].style.color = "black";
    }
}
function haeKoko() {
    var leveys = document.documentElement.clientWidth;
    var korkeus = document.documentElement.clientHeight;

    // Laitetaan vastaus <h1>-t‰gien sis‰‰n
    document.getElementById('wh').innerHTML = "<h1>Leveys: "
        + leveys + " ja korkeus: " + korkeus + "</h1>";
}
function muutaSisalto() {
    const elementti = document.getElementById('muutettava');
    elementti.textContent = 'Uusi teksti';
}