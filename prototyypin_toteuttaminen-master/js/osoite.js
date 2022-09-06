function testi(etunimi, sukunimi, losoite,
  pnro, ptp, puh, email)
{
  this.etunimi = etunimi,
  this.sukunimi = sukunimi,
  this.lahiosoite = losoite,
  this.postinumero = pnro,
  this.postitoimipaikka = ptp,
  this.puhelinnumero = puh,
  this.sahkoposti = email
}
var Jyri = new testi("Jyri", "Lindroos",
"Keskikatu 3", "04200", "Kerava",
"0401744562", "jyri.lindroos@keuda.fi");
console.log(Jyri.sukunimi);
