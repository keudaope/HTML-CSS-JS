function armstrong()
{
  var armstrong = [];
  var taulukkoLuku = [];
  var temp = 1;
  for(var x = 100; x <= 999; x++)
  {
    taulukkoLuku = x.toString().split("");
    for(y = 0; y < 3; y++)
    {
      temp *= taulukkoLuku[y];
    }
    if(x == temp)
    {
      armstrong.push(x);
    }
    temp = 1;
  }
  document.write(armstrong);
}
