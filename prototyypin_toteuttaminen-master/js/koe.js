function testi(nimi, koe)
{
  if(koe < 50)
  {
    console.log(nimi + " Hylätty");
  }
  else if(koe < 60)
  {
    console.log(nimi + " T1");
  }
  else if(koe < 70)
  {
    console.log(nimi + " T2");
  }
  else if(koe < 80)
  {
    console.log(nimi + " H3");
  }
  else if(koe < 90)
  {
    console.log(nimi + " H4");
  }
  else
  {
    console.log(nimi + " K5");
  }
}
