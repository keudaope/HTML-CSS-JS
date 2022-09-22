function vaihda()
{
  var tausta = "#";
  var fvari = "#";
  var varit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A","B","C","D","E","F"];
  for(var i = 0; i < 6; i++)
  {
    tausta += varit[Math.floor(Math.random()*16)]; // #F3D1E0
  }
  document.body.style.backgroundColor = tausta;
  for(var j = 0; j < 6; j++)
  {
    fvari += varit[Math.floor(Math.random()*16)];
  }
  var enimi = document.getElementById('nimi').value;
  document.body.style.color = fvari;
  document.getElementById('vastaus').innerHTML = "Hei " + enimi;
}
