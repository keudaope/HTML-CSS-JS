/*
MERKKIJONOT
Joukko merkkejä (kirjaimet, numerot, symbolit) tunnetaan merkkijonona.
Merkkijonojen tulee alkaa ja päättyä lainausmerkkeihin. Joko yksittäinen heittomerkki ' tai
kaksoisheittomerkki " toimii, kunhan käytät samaa alussa ja lopussa. Alla esimerkki:

  'edabit.com'
  "edabit.com"

Lainausmerkit osoittavat, että mukana oleva teksti on arvo, ei koodi.

MUUTTUJAT
Sana "muuttuja" (var) tarkoittaa "voi muuttua"; niitä käytetään tallentamaan arvoja, jotka voivat muuttua.

Muuttuja on kuin laatikko, johon on kiinnitetty tarralappu. Kun viittaat tarralapussa olevaan nimeen,
voit käyttää mitä tahansa laatikon sisällä olevaa (muuttujaa). Kuten matematiikassa käytetyt x- ja y-muuttujat,
ne ovat yksinkertainen nimi edustamaan tietoja, joihin haluamme viitata.

Käytämme avainsanaa var ilmoittamaan (eli luomaan) muuttuja nimeltä elain:

  var elain = "Kettu"

var on lyhenne muuttujalle (variable) ja = tarkoittaa arvon tallentamista oikealle puolelle
vasemman puolen muuttujaan. Voit nimetä muuttujan millä nimellä tahansa, mutta se ei voi sisältää välilyöntejä.

/// TEHTÄVÄ 1 ///
Poista varsinaisesta tehtävästä (rivistä 29) kommentointi katkaisemalla kommentti rivillä 28 (tähti + kauttaviiva)ja
aloittamalla se uudestaan rivillä 31 (kauttaviiva + tähti) ja tee alla annettu tehtävä ja aja sen jälkeen index.html -tiedosto.
Syötä yhtäläisyysmerkin jälkeen merkkijono "edabit.com". Muista, että merkkijonot on käärittävä lainausmerkkeihin " ".

var verkkosivusto =


Nykyaikaisessa JavaScriptissä var käytetään harvoin muuttujien ilmoittamiseen.
Sen sijaan käytämme const (lyhenne vakiolle) ja let.
Tässä aloittelijan opetusohjelmassa käytämme tästä lähtien const.

/// TEHTÄVÄ 2 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja aja sen jälkeen index.html -tiedosto.
Luodaan muuttuja tyhjästä. Ilmoita muuttuja ruoka ja anna sille arvo "pizza". Käytä var-komennon sijasta const-komentoa.

// kirjoita koodi tämän rivin alle

​NUMEROT
Kuten merkkijonot, numerot ovat arvoja, mutta niitä ei ole kääritty lainausmerkkeihin.
Ne voidaan kirjoittaa desimaalien kanssa tai ilman, ja ne voivat olla positiivisia tai negatiivisia. Esim.

  vakiolampotila = -7.5

Jos luku ei sisällä desimaalilukua, sitä kutsutaan kokonaisluvuksi.

/// TEHTÄVÄ 3 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja aja sen jälkeen index.html -tiedosto.
Ilmoita muuttuja nimeltä paiva ja anna sille arvo 19.

// kirjoita koodi tämän rivin alle

​OPERAATTORIT
Operaattorit ovat arvojen välisiä symboleja, jotka mahdollistavat erilaisia ​​operaatioita,
kuten yhteenlasku +, vähennyslasku -, kertolasku *, jako / jne.
JavaScriptillä on kymmeniä operaattoreita, mutta keskitymme vain aritmeettisiin operaattoreihin,
koska aloittelijat käyttävät niitä kaikkein eniten.

/// TEHTÄVÄ 4 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja aja sen jälkeen index.html -tiedosto.
Jaa 100 2:lla.

const jako =

Tietenkin on olemassa muita operaattoreita, kuten moduuli %, eksponentio **, lisäys ++, dekrementti -- ja monia muita.

/// TEHTÄVÄ 5 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja aja sen jälkeen index.html -tiedosto.
Käytä + -operaattoria ketjuttaaksesi (yhdistääksesi) kaksi merkkijonoa yhteen.

    Ilmoita muuttujan nimi.
    Liitä etunimi sukunimeen (huomaa, että N on isolla kirjaimella).

Koodisi pitäisi näyttää täsmälleen samalta kuin yllä olevassa esimerkissä,
vain sinä lisäät (käyttäen +-operaattoria) kaksi merkkijonoa yhteen.

const firstName = "Luke "

const lastName = "Skywalker"

// kirjoita koodi tämän rivin alle

​FUNKTIOT
Funktiot ovat koodilohkoja, jotka voidaan nimetä ja käyttää uudelleen.
Niille annetaan dataa, he tekevät jotain tiettyä tiedolla ja palauttavat tuloksen.

Perustoiminto näyttää tältä:

  function laskeYhteen(num1, num2)
  {
    return numero1 + numero2
  }

Voitko arvata mitä se tekee? Katsotaanpa jokaista osaa:

    laskeYhteen on funktion nimi.
    num1 ja num2 ovat parametreja (eli muuttujia, jotka sisältävät syöttödataa).
    return on avainsana, joka poistuu funktiosta ja palauttaa arvon (ulostulon).

Palautusavainsanan (return) käyttö on erittäin tärkeää.
Kun ajat funktion, sinun on palautettava vastauksesi, muuten koodi ei toimi.

/// TEHTÄVÄ 6 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja aja sen jälkeen index.html -tiedosto.
Alla oleva funktio ottaa kaksi parametria, joista jokainen sisältää numeron.

    Kerro ensimmäinen parametri num1 toisella parametrilla num2.
    Muista käyttää palautus-avainsanaa yllä olevan esimerkin mukaisesti.

    function kerroNumerot(num1, num2)
    {

    }

Vaikka funktiot yleensä ottavat parametreja, niiden ei välttämättä tarvitse olla.

  function hello()
  {
    return "Hei maailma!";
  }

Kun yllä olevaa funktiota hello() kutsutaan, se palauttaa "Hei maailma!".

TAULUKOT
Taulukot ovat asioiden luetteloita. Ne näyttävät tältä:

  const hedelma = ["omena", "banaani", "appelsiini", "mango", "tomaatti"]

Jokaista hedelmää yllä olevassa taulukossa kutsutaan elementiksi.
Vaikka jokainen elementti yllä olevassa esimerkissä on merkkijono, taulukon elementit voivat olla mitä tahansa arvoja:

const tavaraa = [true, 1976, null, "hei"]

Jokaisella taulukon elementillä on indeksi, joka alkaa nollasta.
Ensimmäisessä hedelmäesimerkissä "omena" on indeksissä 0, "banaani" on indeksissä 1,
"appelsiini" on numerossa 2 ja niin edelleen joukko.

Jos haluat käyttää tiettyä elementtiä taulukossa, teemme näin:

hedelmä[2]

Se on "appelsiinin" indeksi.

/// TEHTÄVÄ 7 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja aja sen jälkeen index.html -tiedosto.
Palauta elementti "Donatello".

    Muista, että taulukon ensimmäinen elementti on 0.
    Palauta aina vastauksesi!

    const kilpikonnat = ["Rafael", "Michelangelo", "Leonardo", "Donatello"]
    function turtlePower(kilpikonnat)
    {

    }

Taulukon elementit ovat muuttuvia, mikä tarkoittaa, että niitä voidaan muuttaa.
Oletetaan esimerkiksi, että meillä on joukko numeroita:

vakionumerot = [14, 56, 78]

Muuttaaksesi arvon 14 (indeksissä 0), teemme näin:

  numerot[0] = 35;

/// TEHTÄVÄ 8 ///
Poista kommentointi tehtävästä, kuten aiemmin on neuvottu ja tee alla oleva tehtävä ja aja sen jälkeen index.html -tiedosto.
Määritä indeksiin 1 tallennetun tiedon arvoksi 88, kun annetaan lukujoukko.

  vakionumerot = [1, 4, 6, 8, 0]

// kirjoita koodi tämän rivin alle


Useimmissa tapauksissa et tiedä taulukon tarkkaa pituutta. Toisin sanoen, et tiedä kuinka monta elementtiä
*/
