function armstrong()
{
  var arm = [];
  var luku;
  var temp = 0;
  var tulosta = "";
  for(var i = 100; i <=999; i++)
  {
    luku = i.toString().split('');
    console.log(luku);
    for(var k = 0; k < luku.length; k++)
    {
      temp += luku[k] * luku[k] * luku[k];
    }
    console.log(temp);
    if(temp == i)
    {
      arm.push(i);
    }
    console.log("luku = " + i + " ja potenssi = " + temp);
    temp = 0;
    luku = 0;
  }
  for(var a = 0; a < arm.length-1; a++)
  {
    tulosta += arm[a] + ", ";
  }
  tulosta += arm[arm.length-1];
  document.getElementById('t1').innerHTML = tulosta;
}
