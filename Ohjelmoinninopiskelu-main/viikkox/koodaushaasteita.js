// tehtävä 1
function laskeYhteen(luku1, luku2)
{
  return luku1+luku2;
}
console.log(laskeYhteen(2,3));

//tehtävä 2
var taulu = [34,566,71,89];
function ekaMuuttuja()
{
  console.log(taulu.shift());
}
ekaMuuttuja();

// tehtävä 3
function kaksiLukua(luku1, luku2)
{
  if((luku1 + luku2) > 100)
  {
    console.log("Luvut ovat liian suuria, jotta pystyisin laskemaan niitä!");
  }
  else {
    console.log("Lukujen summa on alle sata");
  }
}
kaksiLukua(50,30);

// tehtävä 4
function samat(luku1, luku2)
{
  if(luku1 == luku2)
  {
    console.log("Samat");
  }
  else {
    console.log("Eri luvut");
  }
}
samat(12,120);

// tehtävä 5
function sekunneiksi(tunnit, minuutit, sekunnit)
{
  return tunnit * 3600 + minuutit * 60 + sekunnit;
}
console.log(sekunneiksi(9,0,10));


// tehtävä 6
function paiviksi(spaiva, skuukausi, svuosi)
{
  svuosi = svuosi * 365.25;
  switch(skuukausi)
  {
    case 1:
      spaiva = spaiva;
      break;
    case 2:
      spaiva = spaiva + 31;
      break;
    case 3:
      spaiva = spaiva + 59;
      break;
    case 4:
      spaiva = spaiva + 90;
      break;
    case 5:
      spaiva = spaiva + 120;
      break;
    case 6:
      spaiva = spaiva + 151;
      break;
    case 7:
      spaiva = spaiva + 181;
      break;
    case 8:
      spaiva = spaiva + 212;
      break;
    case 9:
      spaiva = spaiva + 243;
      break;
    case 10:
      spaiva = spaiva + 273;
      break;
    case 11:
      spaiva = spaiva + 304;
      break;
    case 12:
      spaiva = spaiva + 334;
      break;
  }
  return svuosi + spaiva;
}
console.log(paiviksi(17,3,2021)-paiviksi(22,5,1965));
