// Muuttujat täytyy aina määritellä
// Muuttujan voi alustaa määrittelyn yhteydessä
var muuttuja = 1;
var teksti = "Heippa";
// Muuttujia voi määritellä useita yhtä aikaa
var luku, texti;
// Kun muuttuja on määritetty, se voidaan alustaa
luku = 34;
texti = "Heippa vaan sullekin";
// Muuttujan arvoa voidaan muuttaa myöhemmin
muuttuja = 14;
teksti = "Heissulivei";
// Muuttujalle voidaan antaa toisen muuttujan arvo
luku = muuttuja; // luku = 14;

/* Funktioilla "tehdään jotakin" ja niitä "kutsutaan" jostakin
   ja ne määritetään function -komennolla aivan samalla tavalla
   kuin muuttuja määritetään var -komennolla */
function laskeYhteen(luku1, luku2)
{
  var summa;
  summa = luku1 + luku2;
  //console.log(summa);
}
// Kutsutaan funktiota
laskeYhteen(5, 3);

// Silmukkaharjoituksia
var kolmosluvut = "";
for(var a=3; a < 100; a+=3) // a = a+3  a++ --> a = a + 1
{
  kolmosluvut += a + " ";
}
//console.log(kolmosluvut);

var samat = "";
for(var b = 0; b < 24; b++)
{
  for(var c = 0; c < 60; c++) // muunna c+=2
  {
    for(var d = 0; d < 60; d++) // muunna d+=3
    {
      if (b == c && c == d)
      {
        samat += b + "" + c +""+ d + " ";
      }
    }
  }
}
//console.log(samat);

// IF-LAUSE Esimerkki
var luku = 13;
if(luku < 0)
{
  //console.log("Luku on negatiivinen");
}
else if(luku < 10)
{
  //console.log("luku on alle 10");
}
else
{
  //console.log("luku on aivan liian suuri, että pysyisin käsittelemään sitä!");
}

var weather = "sateinen";
if(weather == "aurinkoinen")
{
  //console.log("Muista ottaa aurinkolasit mukaan");
}
else if(weather == "sateinen")
{
   //console.log("Muista ottaa sateenvarjo mukaan");
}
else if(weather == "kylmä")
{
  //console.log("Muista pukeutua lämpimästi")
}
else {
  //console.log("Tarkista säätila, ennenkuin lähdet ulos");
}


// Funktioita
function arvoLottonumerot()
{
  // Määritetään väliaikainen muuttuja
  var y;
  // Määritetään taulukko, johon lottonumerot tallennetaan
  var z = [];
  // tehdään silmukka 7:ää lottonumeroa varten
  for(var x = 0; x < 7; x++)
  {
    // käytetään satunnaislukugeneraattoria (0-1) ja kerrotaan se lottonumeroiden
    // määrällä ja pyöristetään ylöspäin
    y = Math.ceil(Math.random() * 40);
    // Tallennetaan luku taulukkoon. Huom! tässä ei tarkasteta, onko luku
    // jo olemassa taulukossa
    z[x] = y;
  }
  // Järjestetään taulukko, jotta on helpompi lukea vastaus
  z.sort();
  // Tulostetaan taulukko näkyviin
  //console.dir(z);
}
// Kutsutaan funktiota
//arvoLottonumerot();

// Esimerkki tekstin ketjuttamisesta
function heippa(nimi)
{
  return "Hei, " + nimi + ", mukavaa päivänjatkoa!";
}
// kutsutaan funktiota
//console.log(heippa("Jyri")); // --> Hei, Jyri, mukavaa päivänjatkoa!

// Edellinen esimerkki IF-lauseen kera
function heippaIf(nimi)
{
  if(nimi == "Jyri")
  {
    return "Hei, " + nimi + ", onpa sinulla todella mahtava nimi!";
  }
  else
  {
    return "Hei, " + nimi + ", mukavaa päivänjatkoa!";
  }
}
// Kutsutaan funktiota
// AVAA: console.log(heippaIf("Jyri")); // --> Hei, Jyri, onpa sinulla todella mahtava nimi!
// AVAA: console.log(heippaIf("Kari")); // --> Hei, Kari, mukavaa päivänjatkoa!

function laskeTekstinPituus(teksti)
{
  // palautetaan annetun tekstin pituus
  return teksti.length;
}
// kutsutaan funktiota
var tekstinPituus = laskeTekstinPituus("supercalifragilisticexpialidocious"); // --> 34
//console.log(tekstinPituus);
// tai suoraan
//console.log(laskeTekstinPituus("epäjärjestelmällistyttämättömyydelläänsäkäänköhän")); // --> 49
// tai vielä suorempaan
//console.log("Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz".length); // --> 63

// MERKKIJONOJEN KÄSITTELYÄ
var merkkijono = "Olipa kerran onnimanni";
// Kaikki isoilla kirjaimilla
// console.log(merkkijono.toUpperCase()); // --> OLIPA KERRAN ONNIMANNI
// Kaikki pienillä kirjaimilla
// console.log(merkkijono.toLowerCase()); // --> olipa kerran onnimanni
// Poimitaan vain yksi kirjain joukosta
// console.log(merkkijono.charAt(4)); // --> a (eli 5. kirjain, muista alkaa nollannesta)

// Tämä on kätevä komento turhien välilyöntien poistamiseen alusta ja lopusta
var merkkijono1 = "      Olipa kerran onnimanni           ";
// console.log(merkkijono1.trim()); // --> Olipa kerran onnimanni
// edellä charAt-komennolla saimme riisuttua tietyn kirjaimen, kun tiesimme, millä
// paikalla se oli, mutta entä jos haluamme etsiä toisin päin, eli millä paikalla
// jokin on, silloin se tapahtuu indexOf()-komennolla
var sananro = merkkijono.indexOf('kerran');
//console.log(sananro); // --> 6, koska kerran sana alkaa 6. paikasta (muista 0, 1 ....)

// Huomaa, että nni löytyy kaksi kertaa tuosta merkkijonosta, mutta indexOf itsessään
// löytää vain ensimmäisen, mutta jos annamme sille parametriksi luvun ensimmäisen jälkeen
// se löytää myös toisen, eli
// console.log(merkkijono.indexOf('nni')); // --> 14, ensimmäisellä kerralla, joten
// console.log(merkkijono.indexOf('nni',15)); // --> 19

// Merkkijonon lyhennys tapahtuu substring(x,y) -komennolla, josta x-kertoo, mistä
// aloitetaan ja y-kertoo, mihin lopetetaan
// console.log(merkkijono.substring(0,5)); // --> Olipa
// console.log(merkkijono.substring(6,12)); // --> kerran

// tietyn merkkijonon korvaus tapahtuu replace(x,y)-komennolla siten, että x on
// korvattava merkkijono ja y on korvaava merkkijono
// console.log(merkkijono.replace("onnimanni", "kuningas")); // --> Olipa kerran kuningas
// console.log(merkkijono.replace("Olipa", "Elelipä")); // --> Elelipä kerran onnimanni

// Laskutoimituksia
var luku1 = 1, luku2 = 2, luku3 = 3, luku4 = 4, summa, erotus, osamaara, tulo, jakojaannos;
summa = luku1 + luku2;
luku2 += luku3; // luku2 = luku2 + luku3
luku2++; // luku2 = luku2 + 1;
luku2--; // luku2 = luku2 - 1;
luku2 += 5; // luku2 = luku2 + 5;
luku2 -= 3; // luku2 = luku2 - 3;
++luku2; // HUOM! ei ole aivan sama kuin luku2++, tekee kyllä saman, mutta tekee aiemmin, vältä käyttämästä
--luku2; // HUOM! ei ole aivan sama kuin luku2--, tekee kyllä saman, mutta tekee aiemmin, vältä käyttämästä
erotus = luku2 - luku1;
tulo = luku1 * luku2;
tulo *= luku1; // tulo = tulo * luku1;
osamaara = luku4 / luku3;
osamaara /= luku1; // osamaara = osamaara / luku1;
jakojaannos = luku2%luku3;
// console.log(jakojaannos);

var lorem = "Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain... What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

function etsiTiettyKirjain(teksti, kirjain)
{
   var pituus = teksti.length;
   var laskuri = 0;
  for(var x = 0; x < pituus; x++)
  {
    if(teksti[x] == kirjain)
    {
      laskuri++;
    }
  }
  return laskuri;
}
console.log(etsiTiettyKirjain(lorem, 'o'));
