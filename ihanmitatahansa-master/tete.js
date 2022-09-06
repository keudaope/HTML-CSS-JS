function isotKirjaimet(sana)
{
  var s = sana, kirjaimet='';
  for(var i = 0; i < sana.length; i++)
  {
    if(sana[i] === sana[i].toUpperCase() && sana[i] != ' ' && sana[i] != ',' && sana[i] !='.')
    {
      kirjaimet += sana[i]+' ';
    }
  }
  console.log('Annetun sanan isot kirjaimet olivat: ' + kirjaimet);
  console.log('Lauseen kuuluisi olla: ' + sana.charAt(0).toUpperCase() + sana.slice(1).toLowerCase());
  console.log('Tai kaikki isona: ' + sana.toUpperCase());
}
isotKirjaimet('OliPa keRran OnniManni');
isotKirjaimet('Jaakko kulta, Jaakko, kulta. Herää jo, herää jo');
