// tehtävä 1
function amstronginLuvut()
{
  var lt; // lukuTaulukoksi;
  for(var x = 100; x < 1000; x++)
  {
    lt = x.toString().split('');
    if(Math.pow(lt[0],3)+Math.pow(lt[1],3)+Math.pow(lt[2],3) == x)
    {
      console.log(x);
    }
  }
}
amstronginLuvut();

// tehtävä 2
function tahdet()
{
  var x,y,chr;
  for(x=1; x <=6; x++)
  {
    for (y=1; y < x; y++)
    {
      chr=chr+("*");
    }
    console.log(chr);
    chr='';
  }
}
tahdet();

// tehtava 3
function testi(jono)
{
  taulukko = Array.from(jono);
  for(i = 0; i < jono.length; i++)
  {
    switch(taulukko[i])
    {
      case "a":
        taulukko[i] = 4;
        break;
      case "e":
        taulukko[i] = 3;
        break;
      case "i":
        taulukko[i] = 1;
        break;
      case "o":
        taulukko[i] = 0;
        break;
      case "s":
        taulukko[i] = 5;
        break;
    }
  }
  // replace -komennon kauttaviiva tarkoittaa seuraava merkki on merkitsevä
  // eli tässä: korvaa pilkku, globaalisti, eli kaikki pilkut ei millään
  teksti = taulukko.toString().replace(/,/g,'');
  console.log(teksti);
}
// tehtävä 4
for (var n = 1; n <= 100; n++)
{
  if (n%3==0 && n%5==0)
  {
    console.log("hik-up");
  }
  else if(n%5 == 0)
  {
    console.log("up");
  }
  else if(n%3 == 0)
  {
    console.log("hik");
  }
  else {
    console.log(n);
  }
}
