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
