// Tehtava1
// Esimerkki löytyy esim.
// https://www.w3schools.com/jsref/jsref_split.asp
// https://www.w3schools.com/jsref/jsref_length_array.asp
// https://www.w3schools.com/jsref/met_document_queryselector.asp
// https://www.w3schools.com/jsref/prop_node_innertext.asp
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
function t1()
{
  // Luodaan elementti, johon teksti kirjoitetaan
  var y = '';
  // Haetaan 'vanha'tekstielementti sivulta
  var korostetut = document.querySelector('p');
  // Haetaan 'vanha'teksti
  korostetut = korostetut.innerText;
  // Jaetaan 'vanha'teksti sanoiksi kirjainten sijasta
  korostetut = korostetut.split(' ');
  // Käydään läpi kaikki sanat
  for (x = 0; x < korostetut.length; x++)
  {
    // Etsitään kaikki 8-merkkiset tai sitä pidemmät sanat
    if(korostetut[x].length > 8)
    {
      // lisätään tyylimerkintä näille sanoille ja lisätään ne uuteen elementtiin
      y+="<span style='background-color: #FFFF00'>" + korostetut[x] + "</span>" + " ";
    }
    else
    {
      // Lisätään muuttamattomat sanat elementtiin
      y+= korostetut[x]+" ";
    }
  }
  // Tulostetaan uusi elementti vanhan tilalle
  document.getElementById('teksti').innerHTML = y;
  console.log(y);
}
// Tehtava2
// Esimerkki löytyy esim.
//https://www.w3schools.com/jsref/met_document_createelement.asp
// https://www.w3schools.com/jsref/prop_link_href.asp
// https://www.w3schools.com/jsref/prop_node_innertext.asp
// https://www.w3schools.com/jsref/prop_doc_body.asp
function t2()
{
  // Luodaan uusi ankkurielementti
  const linkki =  document.createElement('a');
  // tehdään ankkurielementille linkki
  linkki.href = "https://lipsum.com/";
  // Annetaan ankkurielementille teksti
  linkki.innerText = "Tekstiä, jonka gereroi Lorem Ipsum gereraattori";
  // Kirjoitetaan ankkurielementti sivun loppuun
  document.body.appendChild(linkki);
}
