function tehtava1()
{
  // Haku HTML-dokumentista id:n perusteella
  var luku = document.getElementById('luku').value;
  if(luku >= 0)
  {
    // Kirjoitus takaisin HTML-dokumenttiin tapahtuu .innerHTML-komennolla
    document.getElementById('vastaus1').innerHTML = "Luku on positiivinen";
  }
  else {
    document.getElementById('vastaus1').innerHTML = "Luku on negatiivinen";
  }
}
function tehtava2()
{
  // Muistakaa tehdä joko tässä tuo parseInt tai laittaa case "1" jne.
  var viikonpaiva = parseInt(document.getElementById('viikonpaiva').value);
  switch(viikonpaiva)
  {
    case 1:
      document.getElementById('vastaus2').innerHTML = "maanantai";
      break;
    case 2:
      document.getElementById('vastaus2').innerHTML = "tiistai";
      break;
    case 3:
      document.getElementById('vastaus2').innerHTML = "keskiviikko";
      break;
    case 4:
      document.getElementById('vastaus2').innerHTML = "torstai";
      break;
    case 5:
      document.getElementById('vastaus2').innerHTML = "perjantai";
      break;
    case 6:
      document.getElementById('vastaus2').innerHTML = "lauantai";
      break;
    case 7:
      document.getElementById('vastaus2').innerHTML = "sunnuntai";
      break;
    default:
      document.getElementById('vastaus2').innerHTML = "Error, please check your input";
      break;
  }
}
function tehtava3()
{
  var karkaus = document.getElementById('karkaus').value;
  if(karkaus%400==0)
  {
    document.getElementById('vastaus3').innerHTML = "Vuosi on karkausvuosi";
  }
  else if(karkaus%4==0 && karkaus%100!=0)
  {
    document.getElementById('vastaus3').innerHTML = "Vuosi on karkausvuosi";
  }
  else {
    document.getElementById('vastaus3').innerHTML = "Vuosi ei ole karkausvuosi";
  }
}
function tehtava4()
{
  var luku1 = parseInt(document.getElementById('luku1').value);
  var luku2 = parseInt(document.getElementById('luku2').value);
  var luku3 = parseInt(document.getElementById('luku3').value);
  var luku4 = parseInt(document.getElementById('luku4').value);
  var luku5 = parseInt(document.getElementById('luku5').value);
  var summa = luku1+luku2+luku3+luku4+luku5;
  var keskiarvo = summa / 5;
  document.getElementById('vastaus4').innerHTML = "Antamiesi lukujen summa on " + summa + " ja keskiarvo " + keskiarvo;
}
function tehtava5()
{
  var kluku = parseInt(document.getElementById('kerto').value);
  var lausemuuttuja = "";
  for(var k=1;k<=10;k++)
  {
    lausemuuttuja += kluku + " x " + k + " = " + kluku * k + "</br>";
  }
  document.getElementById('vastaus5').innerHTML = lausemuuttuja;
}
