function kolmel()
{
  var luku = [];
  luku[0] = document.getElementById('l1').value;
  luku[1] = document.getElementById('l2').value;
  luku[2] = document.getElementById('l3').value;
  /*document.getElementById('t1').innerHTML = luku.sort();*/
  if(luku1 < luku2 && luku1 < luku3)
  {
    if(luku2 < luku3)
    {
      document.getElementById('t1').innerHTML = "Luvut järjestyksessä: " + luku1 + " " + luku2 + " " + luku3;
    }
    else {
      document.getElementById('t1').innerHTML = "Luvut järjestyksessä: " + luku1 + " " + luku3 + " " + luku2;
    }
  }
  else if(luku2 < luku1 && luku2 < luku3)
  {
    if(luku1 < luku3)
    {
      document.getElementById('t1').innerHTML = "Luvut järjestyksessä: " + luku2 + " " + luku1 + " " + luku3;
    }
    else {
      document.getElementById('t1').innerHTML = "Luvut järjestyksessä: " + luku2 + " " + luku3 + " " + luku1;
    }
  }
  else {
    if(luku1 < luku2)
    {
      document.getElementById('t1').innerHTML = "Luvut järjestyksessä: " + luku3 + " " + luku1 + " " + luku2;
    }
    else {
      document.getElementById('t1').innerHTML = "Luvut järjestyksessä: " + luku3 + " " + luku2 + " " + luku1;
    }
  }
  console.log(luku1, luku2, luku3);
}
