window.onload=function(){
  console.log(window);
  var napautukset = 0;
  function napautustenKasittelija()
  {
    var painallustenMaara = document.getElementById('painallukset');
    napautukset++;
    if (napautukset == 1)
    {
      painallukset.innerHTML = "yhden kerran";
    }
    else {
      painallukset.innerHTML = napautukset + " kertaa";
    }
  }
  var button = document.getElementById('nappi');
  button.addEventListener('click',napautustenKasittelija,false);
  var button2 = document.getElementById('nappi2');
  button2.addEventListener('click', muutaOtsikkoa, false);
  var button3 = document.getElementById('nappi3');
  button2.addEventListener('click', vaihdaVaria, false);
}
function muutaOtsikkoa(){
  var otsikot = document.getElementsByTagName("h1");
  otsikot[0].innerHTML =  "Muutettu otsikko";
}
