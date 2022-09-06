function muutaSalasana()
{
  var teksti1="";
  var salasana1 = document.getElementById('salasana').value;
  for(x = 0; x < salasana1.length; x++)
  {
    teksti1 += salasana1[x] + "ö";
  }
  document.getElementById('vastaus1').innerHTML = teksti1;
}

function muutaSalasana2()
{
  var teksti2="";
  var salasana2 = document.getElementById('salasana2').value;
  for(x = 0; x < salasana2.length; x++)
  {
    teksti2 += salasana2[x] + "x";
  }
  document.getElementById('vastaus2').innerHTML = teksti2;
}

function muutaSalasana3()
{
  var teksti3="";
  var salasana3 = document.getElementById('salasana3').value;
  for(x = 0; x < salasana3.length; x++)
  {
    teksti3 += salasana3[x] + "Jyri";
  }
  document.getElementById('vastaus3').innerHTML = teksti3;
}
