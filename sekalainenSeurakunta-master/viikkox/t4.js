function getAttributes()
{
  //Ohje löytyy esim. https://www.w3schools.com/jsref/met_element_getattribute.asp
  var perus, attHref, attHrefLang, attRel, attTarget, attType;
  // Kaikkiin tulisi tämä sama alku, joten lyhensin sen perus-muuttujaan
  perus = document.getElementById('w3r');
  // Kts. yllä olevasta linkistä vinkki, miten tämä toimii
  attHref = perus.getAttribute("href");
  attHrefLang = perus.getAttribute("hreflang");
  attRel = perus.getAttribute("rel");
  attTarget = perus.getAttribute("target");
  attType = perus.getAttribute("type");
  // Koska lauseesta olisi tullut Über pitkä, pilkoin sen pienempiin palasiin
  // ja liitin ne toisiinsa + -merkin avulla
  perus = "Ylläolevan linkin <ul><li>href on: " + attHref;
  perus += " ja </li><li>hreflang on: " + attHrefLang;
  perus += " ja </li><li>target on: " + attTarget;
  perus += " ja </li><li>type on: " + attType + "</li></ul>";
  // Lopuksi tulostin lauseen takaisin HTML-sivulle tekemääni kappaleeseen
  document.getElementById('vastaus').innerHTML = perus;
}
