// For looppi
function fors()
{
  var vast = "";
  for(i = 10; i < 5; i++)
  {
    vast += i+1 + ". for-kierros <br />";
     document.getElementById('vastaus').innerHTML = vast;
  }
}
// While looppi
function whiles()
{
  var vast = "";
  var j = 10;
  while(j < 5)
  {
    vast += j+1 + ". while-kierros <br />";
     document.getElementById('vastaus').innerHTML = vast;
    j++;
  }
}
// Do-while looppi
function dos()
{
  var vast = "";
  var k = 10;
  do {
    vast += k+1 + ". do-while-kierros <br />";
     document.getElementById('vastaus').innerHTML = vast;
    k++;
  } while (k < 5);
}
function noppa()
{
  var noppa = Math.ceil(Math.random()*6);
  document.getElementById('vastaus').innerHTML = noppa;
}
function aika()
{
  var tunnit, minuutit, sekunnit;
  var aika = "";
  for(tunnit = 0; tunnit < 24; tunnit++)
  {
    for(minuutit = 0; minuutit < 60; minuutit++)
    {
      for(sekunnit = 0; sekunnit < 60; sekunnit++)
      {
        console.log(tunnit + ":" + minuutit + ":" + sekunnit);
      }
    }

  }
}
