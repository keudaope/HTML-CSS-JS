// Luodaan kortit
//var merkit = ['kuva0.png','kuva1.png','kuva2.png','kuva3.png','kuva4.png','kuva5.png','kuva6.png','kuva7.png','kuva0.png','kuva1.png','kuva2.png','kuva3.png','kuva4.png','kuva5.png','kuva6.png','kuva7.png'];
var merkit = [];
var koko = 18;
for(var i = 0; i < koko; i++)
{
  merkit.push("kuva" + i + ".png");
  merkit.push("kuva" + i + ".png");
}
console.log(merkit);
// luodaan laskurimuuttuja
var smerkki = 0;
// luodaan vanha-muuttuja vanhaa korttia varten
// eli verrataan uutta korttia ja vanhaa korttia
var vanha = -1;
// luodaan vanhan kortin alt-ominaisuutta varten muuttuja
var valtti;
var rivisarake = 0;
// varsinaisen taulukon luonti-funktio, jota kutsutaan HTML:n onload-komennolla
function luoTaulukko() {
  if(koko == 8)
  {
    rivisarake = 4;
  }
  else if(koko == 18)
  {
    rivisarake = 6;
  }
  // Sekoitetaan alkuperäinen taulukko
   sekoitetut = sekoita(merkit);
   // Haetaan HTML-sivulta paikka, johon peli tulee
   var paikka = document.getElementById('pelialue');
   // Luodaan peliä varten taulukkoelementti
   var taulukko = document.createElement('table');
   // Luodaan peliä varten taulukon sisältö elementti
  var taulukonSisus = document.createElement('tbody');
  // Itse taulukon luominen, ulompi for tekee rivit ja sisempi sarakkeet
  for(var i = 0; i < rivisarake; i++)
  {
    // Luodaan rivielementti
    var rivi = document.createElement('tr');

    for(var j = 0; j < rivisarake; j++)
    {
      // luodaan sarake-elementti
      var solu = document.createElement('td');
      // luodaan elementti, johon kortti asetetaan
      var sisus = document.createTextNode('');
      // Määritetään kortin alt-muuttuja, 0 - 15, eli jokaisella kortilla omansa
      solu.setAttribute('alt', sekoitetut[(smerkki)]);
      // Määritetään kortin id-muuttuja: solu+numero, esim. solu12
      solu.setAttribute('id', 'solu' + smerkki);
      // Määritetään kortin name-muuttuja 0 - 15, jokaisella omansa
      solu.setAttribute('name', smerkki);
      // Määritetään kortille onclick -toiminta, kutsutaan nayta-funktiota
      solu.setAttribute('onclick', 'nayta('+smerkki+');');
      // kasvatetaan laskuria yhhdellä
      smerkki += 1;
      // syötetään ylläolevat muutoksen kortin-tietoihin
      solu.appendChild(sisus);
      // syötetään ylläolavat muutokset rivin tietoihin
      rivi.appendChild(solu);
    }
    // syötetään rivit taulukon tbody-elementtiin
    taulukonSisus.appendChild(rivi);
  }
  // syötetään lopuksi taulukon tbody-elementti taulukkoon
  taulukko.appendChild(taulukonSisus);
  // Ja aivan viimeiseksi syötetään taulukko sille varattuun paikkaan
  paikka.appendChild(taulukko);
  // Määritetään taulukolle CSS-arvo border, joka on 2px
  taulukko.setAttribute('border', '2');
}
// Valmiiksi annettu funktio, joka sekoittaa pakan.
function sekoita(taulukko)
{
    taulukko.sort(function(a, b){return 0.5 - Math.random()});
    return taulukko;
}
// Funktio, joka laitetaan jokaisen kortin onclick-toiminnoksi
function nayta(numero)
{
  // haetaan napautettu kortti
  var tunnus = document.getElementById('solu'+numero);
  // haetaan napautetun kortin alt-muuttuja
  var altti = tunnus.getAttribute('alt');
  // tarkistetaan, onko kortteja napautettu aiemmin
  if(vanha != -1)
  {
    // jos on, haetaan vanhan kortin alt-muuttuja
    valtti = vanha.getAttribute('alt');
  }
  else{
    // muussa tapauksessa syötetään siihen -1
    valtti = vanha;
  }

  // syötetään napautetun taustan tilalle valitun kortin kuva
  tunnus.innerHTML = '<img src="webkuvat/'+altti+'">';
  // tarkastetaan, onko edellinen kortti ja nykyinen kortti samoja (altit)
  if(altti == valtti){
    // mikäli ovat, haetaan nykyisen kortin alt-muuttuja
    var altti = tunnus.getAttribute('alt');
    // näytetään vanhakortti
    vanha.innerHTML = '<img src="webkuvat/'+altti+'">';
    // näytetään uusi kokrtti
    tunnus.innerHTML = '<img src="webkuvat/'+altti+'">';
  }
  else{
    // muussa tapauksessa tehdään nykyisestä kortista vanha
    vanha = tunnus;
    // pysäytetään ohjelman suoritus hetkeksi
    odota(tunnus);
  }
}
// funktio, joka pysäyttää ohjelman suorituksen 1000-millisekunniksi
function odota(joku) {
  // varsinainen pysäytys funktio
  setTimeout(function(){
      // pysäytyksen jälkeen tyhjennetään nykyisen kortin tiedot
     joku.innerHTML = '';
     // Pysäytyksen pituus 1000 ms = 1 sekunti
   }, 1000);
}
