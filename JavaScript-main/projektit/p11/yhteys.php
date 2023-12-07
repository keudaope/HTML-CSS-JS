<?php
/* Haetaan lomakkeelta tiedot muuttujiin
   $-alkuiset ovat muuttujia ja $_GET:n
   jälkeiset nimet tulevat lomakkeelta input name = 
$enimi = $_GET["etunimi"];
$snimi = $_GET["sukunimi"];
$losoite = $_GET["lahiosoite"];
$postinro = $_GET["postinumero"];
$postitp = $_GET["postitoimipaikka"];
$maa = $_GET["maa"];
$puh = $_GET["puhelinnumero"];
$sahkop = $_GET["sahkoposti"];
echo($enimi);*/

// Muodostetaan muuttujat yhteydenottoa varten
$palvelin = "localhost"; // Paikallinen kone
$kayttaja = "root"; // Oletuskäyttäjä - norm. ei käytetä
$salasana = ""; // Oletuskäyttäjän oletussalasana - VAIHDA
$tietokanta = "lomake" // Jonka teimme MySQL:ään
$portti = 8889;

// Otetaan yhteys tietokantaan ja testataan, toimiiko se
$link = mysqli_connect($palvelin, $kayttaja, $salasana, $tietokanta, $portti);
if(mysqli_connect_error()){ // Tarkastetaan, saadaanko yhteys
    die("Tietokantaan ei saatu yhteyttä");
}

/* tällä komennolla syötetään lomakkeelta saadut tiedot tietokantaan
   osoiterekisteri on se taulu, jonne loimme kentät, jotka seuraavat
   osoiterekisteri-sanaa suluissa. Kenttien nimet pitää olla samat
   kuin mitä tietokannassa.
   VALUES-komennon jälkeen on muuttujat, joihin haimme tiedot lomakkeelta
   eli rivit 5-12 ja taas, muuttujien nimet tulee vastata ylläoleviin 
   $kysely = "INSERT INTO osoiterekisteri (etunimi, sukunimi, lahiosoite,
   postinumero, postitoimipaikka, maa, puhelin, sahkoposti) VALUES ('$enimi',
   '$snimi', '$losoite', '$postinro', '$postitp', '$puh', '$sahkop')";

   // Tarkastetaan, toimiiko yllä oleva kysely
   if(mysql_query($link, $kysely)){
    echo "Uudet tiedot päivitetty"; // Jos toimii, tulee tämä
   }
   else {
    echo "Virhe: " . $kysely . "<br>" . mysqli_error($link); //Jos ei, tulee tämä
   }

   mysqli_close($link); // Lopuksi on tärkeä sulkea tietokantayhteys*/
