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
  teksti = taulukko.toString().replace(/,/g,'');
  console.log(teksti);
}
