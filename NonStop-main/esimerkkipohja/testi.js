function kirjoita()
{
  var teksti = document.getElementById('teksti').value;
  document.getElementById('t1').innerHTML = "Taisitpa kirjoittaa tekstin: " + teksti + $.icndb.getRandomJoke();
}
