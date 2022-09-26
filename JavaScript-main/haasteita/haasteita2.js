function armstrong()
{
  /* Luodaan muuttujat
     arm [], joka sisältää vastauksen
     luku, johon tallennetaan 'hajoitettu' luku
     temp, johon tallennetaan laskutoimitus
     tulosta, johon tallennetaan vastaus */
  var arm = [];
  var luku;
  var temp = 0;
  var tulosta = "";
  // Käydään läpi kaikki 3-numeroiset luvut
  for(var i = 100; i <=999; i++)
  {
    // Hajoitetaan luku, esim 123 -> [1, 2, 3]
    luku = i.toString().split('');
    //console.log(luku);
    // Lasketaan luvun numeroista 3. potenssi
    // ja tallennetaan se temp-muuttujaan
    for(var k = 0; k < luku.length; k++)
    {
      temp += luku[k] * luku[k] * luku[k];
    }
    //console.log(temp);
    // Tarkistetaan, onko temp-muuttujassa oleva luku
    // sama kuin 'hajoittamaton luku', eli luvun numerot
    // kolmanteen potenssiin sama kuin luku, esim.
    // 371 = 3*3*3 + 7*7*7 + 1*1*1
    // Ja tallennetaan sama arvo arm[]-taulukkoon
    if(temp == i)
    {
      arm.push(i);
    }
    //console.log("luku = " + i + " ja potenssi = " + temp);
    // Nollataan arvot
    temp = 0;
    luku = 0;
  }
  // Käydään tulostusta varten arm[]-taulukko ja tallennetaan
  // luvut tulosta-muuttujaan. Koska loppuun ei haluta pilkkua
  // käydään läpi kaikki paitsi viimeinen for-loopissa
  for(var a = 0; a < arm.length-1; a++)
  {
    tulosta += arm[a] + ", ";
  }
  // Lisätään taulukon viimeinen alkio tulosta-muuttujaan
  tulosta += arm[arm.length-1];
  // Tulostetaan tulosta-muuttuja takaisin lomakkeelle
  document.getElementById('t1').innerHTML = tulosta;
}
