function etu()
{
  var l1 = parseInt(document.getElementById('l1').value);
  if(l1 < 0)
  {
    document.getElementById('v1').innerHTML = "Luku on negatiivinen";
  }
  else {
    document.getElementById('v1').innerHTML = "Luku on positiivinen";
  }
}
function viikko()
{
  viikonpaiva = parseInt(document.getElementById('vkp').value);
  switch (viikonpaiva)
  {
    case 1:
      document.getElementById('v2').innerHTML = "Maanantai";
      break;
    case 2:
      document.getElementById('v2').innerHTML = "Tiistai";
      break;
    case 3:
      document.getElementById('v2').innerHTML = "Keskiviikko";
      break;
    case 4:
      document.getElementById('v2').innerHTML = "Torstai";
      break;
    case 5:
      document.getElementById('v2').innerHTML = "Perjantai";
      break;
    case 6:
      document.getElementById('v2').innerHTML = "Lauantai";
      break;
    case 7:
      document.getElementById('v2').innerHTML = "Sunnuntai";
      break;
    default:
      document.getElementById('v2').innerHTML = "Et antanut lukua välillä 1-7";
  }
}
function karkaus()
{
  var vuosi = parseInt(document.getElementById('vuosi').value);
  if(vuosi % 4 == 0 && vuosi % 100 != 0)
  {
    document.getElementById('v3').innerHTML = "Vuosi on karkausvuosi";
  }
  else if(vuosi % 400 == 0)
  {
    document.getElementById('v3').innerHTML = "Vuosi on karkausvuosi";
  }
  else
  {
    document.getElementById('v3').innerHTML = "Vuosi ei ole karkausvuosi";
  }
}
function summaKeskiarvo()
{
  var luku1, luku2, luku3, luku4, luku5, summa, keskiarvo;
  luku1 = document.getElementById('lu1').value;
  try {
    luku1 = parseInt(luku1);
  }
  catch (ex) {
    document.getElementById('v4').innerHTML = ex.message;
  }
  luku2 = parseInt(document.getElementById('lu2').value);
  luku3 = parseInt(document.getElementById('lu3').value);
  luku4 = parseInt(document.getElementById('lu4').value);
  luku5 = parseInt(document.getElementById('lu5').value);
  summa = luku1 + luku2 + luku3 + luku4 + luku5;
  keskiarvo = summa / 5;
  document.getElementById('v4').innerHTML = "Lukujen " + luku1 + ", " + luku2 + ", " + luku3 + ", " + luku4 + ", " + luku5 + " summa = " + summa + " ja keskiarvo = " + keskiarvo;
}
function kertotaulu()
{
  var kerrottava = parseInt(document.getElementById('kluku').value);
  var lause = "";
  for (var i = 1; i <= 10; i++)
  {
    lause += "luku " + kerrottava + " x " + i + " = " + kerrottava*i + "<br />";
  }
  document.getElementById('v5').innerHTML = lause;
}
