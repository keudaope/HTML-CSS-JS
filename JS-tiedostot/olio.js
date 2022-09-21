function Henkilo(etu, suku, los, pnro, ptp, puh, email)
{
	this.etunimi = etu;
  this.sukunimi = suku;
  this.lahiosoite = los;
  this.postinumero = pnro;
  this.postitp = ptp;
  this.puhelin = puh;
  this.email = email;
  this.tiedot = nayta;

}
function nayta()
  {
  	document.write(
      this.etunimi + " " +this.sukunimi + "<br />" +
      this.lahiosoite + "<br />" +
      this.postinumero + " " + this.postitp + "<br />" +
      this.puhelin+ "<br />" +
      this.email + "<br />");
  }
var Jyri = new Henkilo("Jyri","Lindroos","Keskikatu 3", "04300", "Kerava", 358401744562, "jyri.lindroos@keuda.fi");
var Eeva = new Henkilo("Eeva","Tervala","Keskikatu 3", "04300", "Kerava", 358401744555, "eeva.tervala@keuda.fi");

//document.write(Jyri.email);
//Jyri.tiedot();
