// Tehtävä 1
// Ohje tähän löytyy esim:
// https://www.w3schools.com/jsref/dom_obj_style.asp
function js_style()
{
  var teksti = document.getElementById('text');
  teksti.style.fontFamily = 'Permanent Marker';
  teksti.style.fontSize = '48px';
  teksti.style.color = 'red';
}
// Tehtävä 2
// Ohje tähän löytyy esim.
// https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp
// Eli huomaa getElementsByName hakee normaalisti USEITA elementtejä
// joilla on sama nimi, huomaa s-Element sanan lopussa, siksi sekä
// etunimi, että sukunimi ovat taulukoita ja koska niihin tulee vain
// yksi muuttuja, pitää kutsua sitä (0:tta) ja sen arvoa.
function getFormvalue()
{
  var etunimi = document.getElementsByName('fname')[0].value;
  var sukunimi = document.getElementsByName('lname')[0].value;
  document.getElementById('vastaus1').innerHTML = "Etunimi oli " + etunimi + " ja sukunimi oli " + sukunimi;
}
// Tehtävä 3
// Ohje tähän löytyy esim:
// https://www.w3schools.com/jsref/dom_obj_style.asp
function taustat()
{
  vari = variArvonta();
  // Ja siis helpoimmalla pääsette, jos vain teette yhden rivin
  // joka on alla, mutta vari-muuttujan tilalle kirjoitatte vaikka "red"
  document.getElementById('yksi').style.backgroundColor = vari;
  vari = variArvonta();
  document.getElementById('kaksi').style.backgroundColor = vari;
  vari = variArvonta();
  document.getElementById('kolme').style.backgroundColor = vari;
  vari = variArvonta();
  document.getElementById('nelja').style.backgroundColor = vari;
  vari = variArvonta();
  document.getElementById('viisi').style.backgroundColor = vari;

}
// Tehtävä 3:n apufunktio
function variArvonta()
{
  var varitaulu = [];
  var variarvo;
  for(x = 0; x < 6; x++)
  {
    variarvo = Math.floor(Math.random()*16);
    switch(variarvo)
    {
      case 10:
        variarvo = 'A';
        break;
      case 11:
        variarvo = 'B';
        break;
      case 12:
        variarvo = 'C';
        break;
      case 13:
        variarvo = 'D';
        break;
      case 14:
        variarvo = 'E';
        break;
      case 15:
        variarvo = 'F';
        break;
    }
    varitaulu[x] = variarvo;
    temp = "#" + varitaulu.join("").toString();
  }
  return temp;
}
// Tehtävä 4
//Ohje löytyy esim. https://www.w3schools.com/jsref/met_element_getattribute.asp
function getAttributes()
{
  var perus, attHref, attHrefLang, attRel, attTarget, attType;
  // Kaikkiin tulisi tämä sama alku, joten lyhensin sen perus-muuttujaan
  perus = document.getElementById('w3r');
  // Kts. yllä olevasta linkistä vinkki, miten tämä toimii
  attHref = perus.getAttribute("href");
  attHrefLang = perus.getAttribute("hreflang");
  attRel = perus.getAttribute("rel");
  attTarget = perus.getAttribute("target");
  attType = perus.getAttribute("type");
  // Koska lauseesta olisi tullut Über pitkä, pilkoin sen pienempiin palasiin
  // ja liitin ne toisiinsa + -merkin avulla
  perus = "Ylläolevan linkin <ul><li>href on: " + attHref;
  perus += " ja </li><li>hreflang on: " + attHrefLang;
  perus += " ja </li><li>rel on: " + attRel;
  perus += " ja </li><li>target on: " + attTarget;
  perus += " ja </li><li>type on: " + attType + "</li></ul>";
  // Lopuksi tulostin lauseen takaisin HTML-sivulle tekemääni kappaleeseen
  document.getElementById('vastaus').innerHTML = perus;
}

// Tehtävä 5
// Vastaus löytyy esim:
// https://www.w3schools.com/jsref/met_table_insertrow.asp
function insert_Row()
{
  var taulu = document.getElementById('sampleTable');
  // lisätään alkuun
  var ekarivi = taulu.insertRow(0);
  // lisätään solut
  var solu1 = ekarivi.insertCell(0);
  var solu2 = ekarivi.insertCell(1);
  // lisätään sisältöä
  solu1.innerHTML = "Sälää tai jotakin";
  solu2.innerHTML = "Jotakin sälää";
  // lisätään loppuun
  var loppurivi = taulu.insertRow(-1);
  // lisätään solut
  var solu3 = loppurivi.insertCell(0);
  var solu4 = loppurivi.insertCell(1);
  // lisätään sisältöä
  solu3.innerHTML = "Olipa kerran Onnimanni";
  solu4.innerHTML = "Onnimannista Matikka";
}
// Tehtävä 6
// Vastaus löytyy esim:
// https://www.mikedane.com/web-development/javascript/getting-user-input/
function changeContent()
{
  var rivinro = parseInt(window.prompt("Anna rivinumero(0-2), josta tieto vaihdetaan: ","0"));
  var sarakenro = parseInt(window.prompt("Anna sarakenumero(0,1), josta tieto vaihdetaan: ", "0"));
  var teksti = window.prompt("Syötä vaihdettava teksti: ");
  // Asetetaan sarakejoukko, jossa muutettava tieto on
  // Eli valitaan taulukko ja taulukon sisältä tietty rivi ja sen sisältä
  // kaikki sarakkeet
  var sisalto = document.getElementById('myTable').rows[rivinro].cells;
  // Valitaan sarakejoukosta se tietty sarake, jonka tieto muutetaan
  // ja vaihdetaan sen sisältö annetuksi sisällöksi
  sisalto[sarakenro].innerHTML = teksti;
}
// Tehtävä 7
// Esimerkki löytyy esim.
// https://stackoverflow.com/questions/14643617/create-table-using-javascript
function createTable()
{
  // Määritetään HTML-sivu, johon kaikki palautetaan
  var body = document.getElementsByTagName("body")[0];
  // Pyydetään käyttäjältä rivimäärää ja muutetaan se kokonaisluvuksi
  var rivit = parseInt(window.prompt("Anna rivinumerot: ", "0"));
  // Pyydetään käyttäjältä sarakemäärää ja muutetaan se kokonaisluvuksi
  var sarakkeet = parseInt(window.prompt("Anna sarakemäärä: ", "0"));
  // Luodaan tauluelementti
  var taulu = document.createElement("table");
  // Luodaan taulukon kehoelementti
  var taulukonKeho = document.createElement("tbody");
  //luodaan rivit
  for(var r = 1; r <= rivit; r++)
  {
    var rivi  = document.createElement("tr");
    // luodaan sarakkeet: s-määrä sarakkeita aina yhtä riviä kohti
    for(var s = 1; s <= sarakkeet; s++)
    {
      var sarake = document.createElement("td");
      // syötetään tietoa sarakkeeseen
      var sarakkeenTeksti = document.createTextNode("sarake on rivillä " + r + " ja sarakkeessa " + s);
      // Lisätään sarakkeenTeksti sarakkeen sisään
      sarake.appendChild(sarakkeenTeksti);
      // Lisätään sarake riviin
      rivi.appendChild(sarake);
    }
    // Lisätään rivi taulukonKehoon
    taulukonKeho.appendChild(rivi);
  }
  // Lisätään taulukonKeho tauluun
  taulu.appendChild(taulukonKeho);
  // Lisätään taulu sivustolle
  body.appendChild(taulu);
  // Laitetaan taululle 2 px paksuinen kehys
  taulu.setAttribute("border", "2");
}
// Tehtävä 8
// Esimerkki löytyy esim.
// https://www.w3schools.com/jsref/met_select_remove.asp
function removecolor()
{
  var removed = document.getElementById('colorSelect');
  removed.remove(removed.selectedIndex);
}
// Tehtävä 9
// Esimerkki löytyy esim.
// https://www.w3schools.com/jsref/prop_select_length.asp
function getOptions()
{
  var options = document.getElementById('mySelect').length;
  alert(options);
}
// Tehtävä 10
// Esimerkki löytyy esim.
// https://stackoverflow.com/questions/14268583/javascript-to-input-text-into-a-textbox
function laske()
{
  var sade = document.getElementById('sade').value;
  // Pallon tilavuus lasketaan kaavalla 4 x pii x säde x säde x säde / 3
  var tilavuus = 4*Math.pow(sade,3)/3;
  document.getElementById('tilavuus').value = tilavuus;
}
// Tehtävä 11
// Esimerkki löytyy esim.
// https://learncodeweb.com/javascript/how-to-get-and-set-attributes-in-javascript/#:~:text=In%20JavaScript%2C%20you%20can%20use%20special%20or%20unique,behavior%20or%20provides%20additional%20information%20about%20the%20tag.
function vaihdaKuva()
{
  var src="";
  var width = 0; height = 0;
  var x = document.getElementById('kuva');
  var sat = Math.ceil(Math.random()*3);
  switch(sat)
  {
    case 1:
      src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg";
      width = "240";
      height = "160";
      break;
    case 2:
      src="http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg";
      width = "320";
      height = "195";
      break;
    case 3:
      src = "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg";
      width = "500";
      height = "343";
      break;
    default:
      src = "";
      width = "";
      height = "";
      break;
  }
  x.setAttribute("src",src)
  x.setAttribute("width",width);
  x.setAttribute("height",height);
}
// Tehtävä 12
// Tässä tehtävässä ei käytetäkään nappia, vaan käytetään ns.
// onmouseover-event:iä, eli kun valitun tekstin päälle menee,
// niin silloin tapahtuu Jotakin
// esimerkki löytyy esim.
// https://www.w3schools.com/jsref/event_onmouseover.asp
// Ensiksi valitaan kaikki lihavoidut sanat taulukkoon
// sitten käydään taulukko läpi ja vaihdetaan fontin väri
function korosta()
{
  lihavoidut = document.getElementsByTagName('strong');
  for (var i=0; i<lihavoidut.length; i++)
  {
    lihavoidut[i].style.color = "red";
  }
}

// Kun hiiri poistuu, palautuu kirjain takaisin mustaksi
function palauta()
{
  lihavoidut = document.getElementsByTagName('strong');
  for (var i=0; i<lihavoidut.length; i++)
  {
    lihavoidut[i].style.color = "black";
  }
}
// Tehtävä 13
// esimerkki löytyy esim.
// https://www.w3schools.com/jsref/event_onresize.asp
function koonMuutos()
{
  var leveys = window.outerWidth;
  var korkeus = window.outerHeight;
  document.getElementById('vastaus').innerHTML = "Ikkunan leveys on: " + leveys + " ja korkeus on: " + korkeus;
}
