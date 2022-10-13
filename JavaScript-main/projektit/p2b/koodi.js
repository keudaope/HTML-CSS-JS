function lahetaVastaukset()
{
  // Alustetaan muuttujat
  var yhteensa = 5;
  var pisteet = 0;
  var huom = 0;

  // Haetaan arvot lomakkeelta
  var k1 = document.forms["kyselylomake"]["k1"].value;
  var k2 = document.forms['kyselylomake']['k2'].value;
  var k3 = document.forms['kyselylomake']['k3'].value;
  var k4 = document.forms['kyselylomake']['k4'].value;
  var k5 = document.forms['kyselylomake']['k5'].value;

  // Onko kaikkiin vastattu - tarkastus
  for(i = 1; i <= yhteensa; i++)
  {
    if(eval('k'+ i) == null || eval('k' + i) == '')
    {
      alert('Et vastannut kysymykseen nro: ' + i);
      huom = 1;
    }
    if(huom == 1)
    {
      return false;
    }
  }

  // Asetetaan oikeat vastaukset
  var vastaukset = ['b', 'a', 'd', 'b', 'd'];
  // Tarkastetaan vastaukset
  {
    for(var j = 1; j <= yhteensa; j++)
    {
      if(eval('k' + j) == vastaukset[j-1])
      {
        pisteet++;
      }
    }
  }
  tulokset = document.getElementById('tulokset');
  alert('Sait ' + pisteet + ' pistettä, kun maksimi pistemäärä oli ' + yhteensa);
  tulokset.innerHTML = '<h3>Sait <span>' + pisteet + '</span> pistettä, kun maksimipistemäärä oli <span>' + yhteensa + '</span></h3>';
  return false;
}
