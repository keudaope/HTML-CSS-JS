function Tili(tilinro, sukunimi, etunimi, saldo)
{
  this.nro = tilinro;
  this.sukunimi = sukunimi;
  this.enimi = etunimi;
  this.saldo = saldo;

  this.tiedot = NaytaTiedot;
}
var hannes = new Tili('123456-3443', 'Häyrynen', 'Hannes', 53);
var paivi = new Tili('123456-1212', 'Kuukka', 'Päivi', 12);

function NaytaTiedot()
{
    // Sijoitetaan olion muuttujien sisältö metodin muuttujiin:
    var tilinro = this.nro;
    var etunimi = this.enimi;
    var sukunimi = this.sukunimi;
    var saldo = this.saldo;

    document.write("Henkilön tilinumero on: " + tilinro + " ja nimi on " + etunimi + " " + sukunimi + " ja hänen saldo on " + saldo + " euroa");
}
hannes.tiedot(); --> Henkilön tilinumero on 123456-3443 ja nimi on Hannes Häyrynen ja saldo on 53 euroa
paivi.tiedot(); -Henkilön tilinumero on 123456-1212 ja nimi on Päivi Kuukka ja saldo on 12 euroa

function talleta(summa)
{
  var saldo = this.saldo;
  var summa = summa;
  saldo+= summa; // saldo = saldo + summa;
  document.write("Uusi saldo on: " + saldo);
}
function otaRahaa(summa)
{
  var saldo = this.saldo;
  var summa = summa;
  if(summa <= saldo)
  {
    saldo-= summa; // saldo = saldo - summa;
  }
  else {
    document.write("Sinulla ei ole riittävästi rahaa tilillä");
  }
  document.write("Uusi saldo on: " + saldo);
}
