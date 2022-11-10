<?php

// Tallennetaan muuttujiin tarvittavat tiedot yhteyden rakentamista varten
// Muuttujat voivat olla minkä nimisiä tahansa, nimesin ne nyt tuon nimisiksi,
// Jotta teillä olisi käsitys, mitä ne edustavat.

    $palvelin = "localhost";
    $kayttaja = "root";
    $salasana = "";
    $tietokanta = "hr";

// Muodostetaan yhteys ja tallennetaan se muuttujaan

    $yhteys = new mysqli($palvelin, $kayttaja, $salasana, $tietokanta);

// Tarkistetaan, toimiiko yhteys

    if($yhteys->connect_error){
    die("Yhteys epäonnistui: " . $yhteys->connect_error);
    }

// Muodostetaan kyselylauseke ja tallennetaan se muuttujaan

    $kysely="SELECT first_name, last_name FROM employees WHERE department_ID < 50";

// Suoritetaan kysely ja tallennetaan vastaukset muuttujaan

    $vastaukset = $yhteys->query($kysely);

//Tarkistetaan, onko vastauksia enemmän kuin 0

    if ($vastaukset->num_rows > 0) {
    echo "<table border = '1'><tr><th>Etunimi</th><th>Sukunimi</th></tr>";

// Lähdetään käymään vastauksia läpi rivi riviltä

    while($row = $vastaukset->fetch_assoc()){

// Tulostetaan vastaukset taulukkoon

    echo "<tr><td>" . $row["first_name"]. "</td><td>" . $row["last_name"]."</td></tr>";
    }
}


// Mikäli vastauksia oli 0, tulostetaan tämä


    else{
    echo "0 vastausta";
    }echo "</table>";


// Suljetaan yhteys


    $yhteys->close();
    ?>
