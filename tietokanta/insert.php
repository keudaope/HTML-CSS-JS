<?php


/* Yritetään ottaa mysql yhteyttä. Käytetään uudempaa komentoa,
eli mysqli_connect-komentoa, joka on aivan samanlainen kuin mysql_connect-komento.*/


$link = mysqli_connect("localhost", "root", "", "hr");


// Tarkistetaan, toimiiko yhteys


if($link === false){
die("VIRHE: Yhteyttä ei voitu muodostaa. " . mysqli_connect_error());
}

// Tallennetaan muuttujiin syöttölomakkeen tiedot


$first_name = mysqli_real_escape_string($link, $_REQUEST['first_name']);
$last_name = mysqli_real_escape_string($link, $_REQUEST['last_name']);
$email = mysqli_real_escape_string($link, $_REQUEST['email']);
$phone_number = mysqli_real_escape_string($link, $_REQUEST['phone_number']);
$hire_date = mysqli_real_escape_string($link, $_REQUEST['hire_date']);
$job_id = mysqli_real_escape_string($link, $_REQUEST['job_id']);
$salary = mysqli_real_escape_string($link, $_REQUEST['salary']);
$manager_id = mysqli_real_escape_string($link, $_REQUEST['manager_id']);
$department_id = mysqli_real_escape_string($link, $_REQUEST['department_id']);


// Yritetään tallentaa tiedot tietokantaan


$sql = "INSERT INTO employees (first_name, last_name, email, phone_number, hire_date, job_id, salary, manager_id, department_id) VALUES ('$first_name', '$last_name', '$email', '$phone_number', '$hire_date', '$job_id', '$salary', '$manager_id', '$department_id')";
if(mysqli_query($link, $sql)){
echo "Tiedot tallentuivat onnistuneesti.";
} else{
echo "VIRHE: Toimintoa ei pystytty suorittamaan $sql. " . mysqli_error($link);
}

// Suljetaan yhteys


mysqli_close($link);
?>
