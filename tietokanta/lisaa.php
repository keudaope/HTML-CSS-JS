<?php
$etu = $_POST["etunimi"];
$suku = $_POST["sukunimi"];
$os = $_POST["losoite"];
$pnro = $_POST["pnro"];
$ptp = $_POST["ptp"];
$maa = $_POST["maa"];
/*echo "<b>Annoit seuraavat tiedot:</b> <br>";
echo $etu . " " . $suku . "<br>";
echo $os . "<br>";
echo $pnro . " " . $ptp . "<br>";
echo $maa;*/
// Luodaan muuttujat ja niiden sisältö
$palvelin = "localhost";
$kayttajatunnus = "root";
$salasana = "";
$tietokanta = "osoitetieto";
//$con=mysqli_connect("localhost","root","","hr");
// Luodaan yhteyslauseke
$yhteys=mysqli_connect($palvelin,$kayttajatunnus,$salasana,$tietokanta);
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
// Luodaan kyselylauseke
$vastaus = mysqli_query($yhteys,"INSERT INTO osoitteet VALUES ('$etu', '$suku', '$os', '$pnro', '$ptp', '$maa')");
if($vastaus)
{
  echo "<h3>data stored in a database successfully."
      . " Please browse your localhost php my admin"
      . " to view the updated data</h3>";
}
else
{
  echo "ERROR: Hush! Sorry $vastaus. "
      . mysqli_error($yhteys);
}
?>
