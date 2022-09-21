var uusiNimi, enimi, snimi, puh;
function Henkilo(etunimi, sukunimi, puhelin)
{
  this.etunimi = etunimi;
  this.sukunimi = sukunimi;
  this.puhelin = puhelin;
}

function tayta()
{
  enimi = document.getElementById('enimi').value;
  snimi = document.getElementById('snimi').value;
  puh = document.getElementById('puh').value;
  uusiNimi = enimi+snimi;
  this[uusiNimi] = new Henkilo(enimi, snimi, puh);
  console.log(uusiNimi);
  console.log(JyriLindroos.etunimi);
  console.log("\n"+JyriLindroos.sukunimi);
  console.log("\n"+JyriLindroos.puhelin);
}
