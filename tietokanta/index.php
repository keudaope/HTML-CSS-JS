<?php
// Luodaan muuttujat ja niiden sisältö
$palvelin = "localhost";
$kayttajatunnus = "root";
$salasana = "";
$tietokanta = "hr";
//$con=mysqli_connect("localhost","root","","hr");
// Luodaan yhteyslauseke
$yhteys=mysqli_connect($palvelin,$kayttajatunnus,$salasana,$tietokanta);
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
// Luodaan kyselylauseke
$vastaus = mysqli_query($yhteys,"SELECT * FROM employees WHERE LAST_NAME > 'S' ORDER BY LAST_NAME");
// Syötetään echo-komennolla HTML:ää väliin - HUOM! sitaatit ja loppuun ;
echo "<table border='1'>
<tr>
<th>Etunimi</th>
<th>Sukunimi</th>
</tr>";
// Käydään läpi kysely rivi kerrallaan
while($rivi = mysqli_fetch_array($vastaus))
{
echo "<tr>";
// Hakasulkeisiin kentän nimi kuten se on MySQL:ssä
// Piste toimii yhdistämismerkkinä (+ JavaScriptissä)
echo "<td>" . $rivi['FIRST_NAME'] . "</td>";
echo "<td>" . $rivi['LAST_NAME'] . "</td>";
echo "</tr>";
}
echo "</table>";
// Yhteys on hyvä sulkea, kun se rivillä 8 'avataan'
mysqli_close($yhteys);
?>
