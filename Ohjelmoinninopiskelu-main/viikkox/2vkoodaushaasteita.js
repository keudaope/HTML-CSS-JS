// tehtävä 1
/*function pieninSuurin(taulu)
{
  taulu.sort((a,b) => a-b);
  var pienin = taulu.shift();
  var suurin = taulu.pop();
  console.log("taulukon pienin oli: " + pienin + " ja suurin oli: " + suurin);
}
pieninSuurin([6,8,2,9,5,4,7,11,14,44,67,99,22,33,111,1111,11111]);

// tehtävä 2
function parillinenPariton(luku)
{
  if(luku%2==0)
  {
    console.log("luku on parillinen");
  }
  else {
    console.log("luku on pariton");
  }
}
parillinenPariton(30);

// tehtävä 3
function numeroNimeksi(numero)
{
  switch(numero)
  {
    case 1:
      console.log("tammikuu");
      break;
    case 2:
      console.log("helmkuu");
      break;
    case 3:
      console.log("maaliskuu");
      break;
    case 4:
      console.log("huhtikuu");
      break;
    case 5:
      console.log("toukokuu");
      break;
    case 6:
      console.log("kesäkuu");
      break;
    case 7:
      console.log("heinäkuu");
      break;
    case 8:
      console.log("elokuu");
      break;
    case 9:
      console.log("syyskuu");
      break;
    case 10:
      console.log("lokakuu");
      break;
    case 11:
      console.log("marraskuu");
      break;
    case 12:
      console.log("joulukuu");
      break;
    default:
      console.log("Antamallasi numerolla ei löydy kuukautta");
      break;
  }
}
numeroNimeksi(90);

// Tehtävä 4
class Osoiterekisteri
{
  constructor(etunimi, sukunimi, lahiosoite, postinumero, postitoimipaikka, puhelin, sahkoposti)
  {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.lahiosoite = lahiosoite;
    this.postinumero = postinumero;
    this.postitoimipaikka = postitoimipaikka;
    this.puhelin = puhelin;
    this.sahkoposti = sahkoposti;
  }
}
var Jyri = new Osoiterekisteri("Jyri", "Lindroos", "Keskikatu 3", "04200", "Kerava", "0401744562", "jyri.lindroos@keuda.fi");
var Eija = new Osoiterekisteri("Eija", "Lumme", "Keskikatu 3", "04200", "Kerava", "0401744444", "eija.lumme@keuda.fi");

console.log(Eija.etunimi + " " + Eija.sukunimi);
// Testataan onnistuiko
console.log(Jyri.sukunimi);
*/
// Tehtävä 5
function aakkosissa(teksti)
{
  var taulu = Array.from(teksti);
  taulu.sort();
  teksti = taulu.join("").toString();
  //console.log(teksti);
  return teksti;
}
console.log(aakkosissa("Hypercalifracilisticexplialidocious"));

// Tehtävä 6
function arviointi(pisteet)
{
  if(pisteet < 50)
  {
    return "Hylätty";
  }
  else if(pisteet < 60)
  {
    return "T1";
  }
  else if(pisteet < 70)
  {
    return "T2";
  }
  else if(pisteet < 80)
  {
    return "H3";
  }
  else if(pisteet < 90)
  {
    return "H4";
  }
  else {
    return "K5";
  }
}
console.log("Viivi " + arviointi(77));
