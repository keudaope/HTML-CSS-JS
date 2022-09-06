var lause = "Olipa kerran onnimanni";
function metodeilla(lause)
{
  /*var kaannetty = lause.reverse(); // ei toimi*/
  var lause = Array.from(lause);
  var kaannetty = lause.reverse();
  var lopullinen = kaannetty.join("").toString();
  console.log(lopullinen);
}

function forLauseella(lause)
{
  for(var x = lause.length-1; x >= 0; x--)
  {
  console.log(lause[x]);
  }
}
//forLauseella("Olipa kerran onnimanni");
metodeilla();
