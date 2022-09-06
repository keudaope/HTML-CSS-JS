function testi(teksti)
{
  var taulukkoteksti
  = Array.from(teksti);
  taulukkoteksti.sort();
  // .join -liittää
  //('') poistaa pilkut
  var text
  = taulukkoteksti.join('');
  console.log(text);
}
