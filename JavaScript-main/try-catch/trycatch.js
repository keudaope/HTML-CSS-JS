function testaa()
{
  var etunimi, sukunimi;
  try {
    etunimi = document.getElementById('enimi').value;
    sukunimi = document.getElementById('snimi').value;

  } catch (e) {
      alert("Virhe syötössä! " + e.message);
  } finally {
      alert("Annoit seuraavat tiedot: " + etunimi + " " + sukunimi);
  }
}
