function tarkastaEtumerkki()
{
  var tarkastettava = document.getElementById('aluku').value;
  if(tarkastettava >= 0)
  {
    document.getElementById('tulosta1').innerHTML = "Luku on positiivinen";
  }
  else {
    document.getElementById('tulosta1').innerHTML = "Luku on negatiivinen";
  }
}
function viikonpaiva()
{
  var vluku = document.getElementById('vluku').value;
  if(vluku == 1)
  {
    document.getElementById('tulosta2').innerHTML = "Maanantai";
  }
  else if(vluku == 2)
  {
    document.getElementById('tulosta2').innerHTML = "Tiistai";
  }
  else if(vluku == 3)
  {
    document.getElementById('tulosta2').innerHTML = "Keskiviikko";
  }
  else if(vluku == 4)
  {
    document.getElementById('tulosta2').innerHTML = "Torstai";
  }
  else if(vluku == 5)
  {
    document.getElementById('tulosta2').innerHTML = "Perjantai";
  }
  else if(vluku == 6)
  {
    document.getElementById('tulosta2').innerHTML = "Lauantai";
  }
  else if(vluku == 7)
  {
    document.getElementById('tulosta2').innerHTML = "Sunnuntai";
  }
  else {
      document.getElementById('tulosta2').innerHTML = "Luku ei kuulu viikonpäivälle";
  }
}
function onkoKarkaus()
{
  kluku = document.getElementById('kluku').value;
  if(kluku%4 == 0 && kluku%100 != 0)
  {
    document.getElementById('tulosta3').innerHTML = "Luku on karkausvuosi";
  }
  else if(kluku%400 ==0) {
    document.getElementById('tulosta3').innerHTML = "Luku on karkausvuosi";
  }
  else {
    document.getElementById('tulosta3').innerHTML = "Luku ei ole karkausvuosi";
  }
}
function summaKeskiarvo()
{
  var lu1, lu2, lu3, lu4, lu5, summa, keskiarvo;
  lu1 = parseInt(document.getElementById('luku01').value);
  lu2 = parseInt(document.getElementById('luku02').value);
  lu3 = parseInt(document.getElementById('luku03').value);
  lu4 = parseInt(document.getElementById('luku04').value);
  lu5 = parseInt(document.getElementById('luku05').value);
  summa = lu1 + lu2 + lu3 + lu4 + lu5;
  keskiarvo = summa / 5;
  document.getElementById('tulosta4').innerHTML = "Lukujen summa on " + summa + " ja keskiarvo on " + keskiarvo;
}
function teeKertotaulu()
{
  var kerluku = document.getElementById('kerrottava').value;
  var taulu = kerluku + ' x 0 = '+ kerluku*0 + '<br/>';
  taulu += kerluku + ' x 1 = '+ kerluku*1 + '<br/>';
  taulu += kerluku + ' x 2 = '+ kerluku*2 + '<br/>';
  taulu += kerluku + ' x 3 = '+ kerluku*3 + '<br/>';
  taulu += kerluku + ' x 4 = '+ kerluku*4 + '<br/>';
  taulu += kerluku + ' x 5 = '+ kerluku*5 + '<br/>';
  taulu += kerluku + ' x 6 = '+ kerluku*6 + '<br/>';
  taulu += kerluku + ' x 7 = '+ kerluku*7 + '<br/>';
  taulu += kerluku + ' x 8 = '+ kerluku*8 + '<br/>';
  taulu += kerluku + ' x 9 = '+ kerluku*9 + '<br/>';
  taulu += kerluku + ' x 10 = '+ kerluku*10 + '<br/>';
  document.getElementById('tulosta5').innerHTML = taulu;
}
