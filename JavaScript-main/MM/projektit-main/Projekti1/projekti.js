function tarkasta(form)
{
var etunimi = form.enimi.value;
var sukunimi = form.snimi.value;
var sahkoposti = form.email.value;
var palaute = form.palaute.value;
var mainos = form.posti;
var koulu = form.koulu;

if(etunimi.length < 3)
    {
      alert("Anna pidempi nimi");
      form.enimi.focus();
      return false;
    }
if(sukunimi.length < 3)
    {
      alert("Anna pidempi sukunimi");
      form.snimi.focus();
      return false;
    }
  var ehdot = /\S+@\S+/;
  if(!ehdot.test(sahkoposti))
    {
      alert("Anna kunnollinen sähköposti");
      form.email.focus();
      return false;
    }
  if(palaute.length < 15)
      {
        alert("Palautteen pitää olla vähintään 15 merkkiä!");
        form.palaute.focus();
        return false;
      }
  var vastaus = false;
  for(var i = 0; i < mainos.length; i++)
{
  if(mainos[i].checked == true)
    {
      vastaus = true;
    }
}
  if(vastaus == false)
{
  alert("Valitse haluatko mainoksia");
  return false;
}
  var tarkastavastaus = false;
  for(var j = 0; j < koulu.length; j++)
{
  if(koulu[j].checked == true)

    {
       tarkastavastaus = true;
     }
}
if(tarkastavastaus == false)
    {
     alert("Valitse mistä tykkäät!");
     return false;
    }
else
    {
     alert("Lomake on tallennettu ja lähetetty");

    }
}

function tyhjenna(lomake)
{
var clean = lomake.value;
if(!confirm("Oletko varma että haluat tyhjentää lomakkeen!?"))
{
 return false;
}
}
