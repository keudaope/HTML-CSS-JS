<!-- Määritellään dokumentin tyyppi html:ksi -->
<!DOCTYPE html>

<!-- Määritellään dokumentin kieli englanniksi -->
<html lang="en">

<!-- Aloitetaan head-osuus, eli se osuus, joka ei näy varsinaisessa dokumentissa -->
  <head>

<!-- Määritetään, että merkistö on Unicoden vaihtelevanpituinen koodaustapa, joka on yhteensopiva vanhempien järjestelmien kanssa -->
    <meta charset="UTF-8">

<!-- Kirjoitetaan dokumentit aihe, joka näkyy selaimen välilehdellä -->
    <title>Add Record Form</title>

<!-- päätetään head-osuus -->

  </head>

<!-- aloitetaan varsinainen dokumentti -->
  <body>

<!-- Luodaan lomake, joka lähettää tiedot insert.php-tiedostolle post-metodilla -->

    <form action="insert.php" method="post">

<!-- Luodaan taulukko, jotta saadaan lomakkeen tiedot siististi näkyviin -->

    <table>

<!-- Taulukon ensimmäinen rivi, jossa ensimmäisessä sarakkeessa otsikkona "Etunimi:" -->

    <tr><td><label for="firstName">Etunimi:</label></td>

<!-- Taulukon toisessa sarakkeessa syöttö-kenttä, johon siis käyttäjä syöttää tiedon. Tässä on tärkeää id-arvo, jolla tieto välitetään eteenpäin -->

    <td><input type="text" name="first_name" id="firstName"></td>

<!-- Rivi päätetään -->

    </tr>
    <tr>
    <td><label for="lastName">Sukunimi:</label></td>
    <td><input type="text" name="last_name" id="lastName"></td>
    </tr>
    <tr>
    <td><label for="emailAddress">Sähköposti:</label></td>
    <td><input type="text" name="email" id="emailAddress"></td>
    </tr>
    <tr>
    <td><label for="emailAddress">Puhelin:</label></td>
    <td><input type="text" name="phone_number" id="emailAddress"></td>
    </tr>
    <tr>
    <td><label for="emailAddress">Työhöntulopäivä:</label></td>
    <td><input type="text" name="hire_date" id="emailAddress"></td>
    </tr>
    <tr>
    <td><label for="emailAddress">Työ_id:</label></td>
    <td><input type="text" name="job_id" id="emailAddress"></td>
    </tr>
    <tr>
    <td><label for="emailAddress">Palkka:</label></td>
    <td><input type="text" name="salary" id="emailAddress"></td>
    </tr>
    <tr>
    <td><label for="emailAddress">Esimies:</label></td>
    <td>

<!-- Tästä alkaa php-koodi, jolla haetaan tähän sarakkeeseen tietoa tietokannasta.
Ideana siis on, ettei käyttäjän tarvitse muistaa esimiehen id-koodia, vaan hän voi valita
esimiehen nimen perusteella ja lomake lähettää esimiehen id-koodin tämän valinnan perusteella
eteenpäin. -->

<?php
$palvelin = "localhost";
$kayttajatunnus = "root";
$salasana = "";
$tietokanta = "hr";
// Koska tämä on vanhempaa koodia, alla olevalla komennolla otetaan virheilmoitukset pois käytöstä.

    error_reporting(E_ALL ^ E_DEPRECATED);

// Edelleen käytetään vanhempaa koodia, ei siis mysqli-koodia, mutta toimii tämä näinkin.
// Muodostetaan yhteys tietokantaan komennolla mysql_connect(palvelin,käyttäjä,salasana)

$yhteys=mysqli_connect($palvelin,$kayttajatunnus,$salasana,$tietokanta);
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}


// Muodostetaan kyselylauseke ja tallennetaan se muuttujaan nimeltä sql
// Kyselylauseessa etsitään kaikki managerit ja tämä täytyy tehdä alikyselyn avulla
// Huomaa, että tässä täytyy käyttää lainausmerkkejä, sitaatit eivät käy.

    //$sql='SELECT employee_id, last_name, first_name FROM employees WHERE employee_id in (SELECT manager_id FROM employees)';

// Suoritetaan kysely mysql_query(kysely)-komennolla

$vastaus = mysqli_query($yhteys,'SELECT employee_id, last_name, first_name FROM employees WHERE employee_id in (SELECT manager_id FROM employees)');
if($vastaus)
{
  echo "<h3>Yhteys tietokantaan luotu</h3>";
}
else
{
  echo "ERROR: Hush! Sorry $vastaus. "
      . mysqli_error($yhteys);
}

// Tarkistetaan, tuleeko yhtään riviä vastaukseksi, jos ei, jätetään while-looppi suorittamatta
$select= '<select name="manager_id">';
    while($rs = mysqli_fetch_array($vastaus))
    {

// Tehdään HTML-puolen pudotusvalikko, eli "tulostetaan" vastaus pudotusvalikkoon



// Käydään läpi kyselyn vastauksia tietue kerrallaan, kunnes päästään viimeiseen tietueeseen

    //while($rs=mysql_fetch_array($vastaus)){

// Tallennetaan option value -arvoksi, eli lähetettäväksi tiedoksi employee_id
// Mutta tulostetaan näkyviin sukunimen ja etunimen yhdistelmä välilyönnillä erotettuna

    $select.='<option value="'.$rs['employee_id'].'">'.$rs['last_name']. ' '.$rs['first_name'].'</option>';
    }
  //}

// Suljetaan pudotusvalikko, kuten HTML:ssä on tapana

    $select.='</select>';

// Tulostetaan pudotusvalikko näkyviin

    echo $select;
?>

<!-- Suljetaan sarake, rivi ja aloitetaan uusi rivi ja sarake jne.-->
    </td>
    </tr>
    <tr>
    <td><label for="emailAddress">Osasto:</label></td>
    <td>

<!-- Tästä alkaa php-koodi, jolla haetaan tähän sarakkeeseen tietoa tietokannasta.
Ideana siis on, ettei käyttäjän tarvitse muistaa osaston id-koodia, vaan hän voi valita
osaston nimen perusteella ja lomake lähettää osaston id-koodin tämän valinnan perusteella
eteenpäin. -->

<?php

// Koska tämä on vanhempaa koodia, alla olevalla komennolla otetaan virheilmoitukset pois käytöstä.

    error_reporting(E_ALL ^ E_DEPRECATED);

// Edelleen käytetään vanhempaa koodia, ei siis mysqli-koodia, mutta toimii tämä näinkin.
// Muodostetaan yhteys tietokantaan komennolla mysql_connect(palvelin,käyttäjä,salasana)

$yhteys=mysqli_connect($palvelin,$kayttajatunnus,$salasana,$tietokanta);
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}


// Ja lopulta valitaan tietokanta komennolla mysql_select_db(tietokanta)

    //mysql_select_db("hr");

// Muodostetaan kyselylauseke ja tallennetaan se muuttujaan nimeltä sql
// Kyselylauseessa etsitään kaikki osastot
$vastaus = mysqli_query($yhteys,'SELECT department_id, department_name FROM departments');
if($vastaus)
{
  echo "<h3>Yhteys tietokantaan luotu</h3>";
}
else
{
  echo "ERROR: Hush! Sorry $vastaus. "
      . mysqli_error($yhteys);
}
  //  $sql = "SELECT department_id, department_name FROM departments";

// Suoritetaan kysely mysql_query(kysely)-komennolla

    //$sql=mysql_query($sql);

// Tarkistetaan, tuleeko yhtään riviä vastaukseksi, jos ei, jätetään while-looppi suorittamatta

$select= '<select name="department_id">';
    while($rs = mysqli_fetch_array($vastaus))
    {

// Tehdään HTML-puolen pudotusvalikko, eli "tulostetaan" vastaus pudotusvalikkoon

    //$select= '<select name="select">';

// Käydään läpi kyselyn vastauksia tietue kerrallaan, kunnes päästään viimeiseen tietueeseen

    //while($rs=mysql_fetch_array($vastaus)){

// Tallennetaan option value -arvoksi, eli lähetettäväksi tiedoksi employee_id
// Mutta tulostetaan näkyviin osaston nimi

    $select.='<option value="'.$rs['department_id'].'">'.$rs['department_name'].'</option>';
    }
  //}


// Suljetaan pudotusvalikko, kuten HTML:ssä on tapana

    $select.='</select>';

// Tulostetaan pudotusvalikko näkyviin

    echo $select;
    ?>

<!--Tässä lopetataan taulukon sarake, rivi ja itse taulukko -->

    </td>
    </tr>
    </table>

<!-- Sitten on lähetyspainike -->

    <input type="submit" value="Submit">

<!-- Ja lopuksi vielä lopetetaan lomake -->

    </form>
  </body>
</html>
