function testaa()
{
  let arvo = "";
  try {
    arvo = parseInt(document.getElementById('nro').value);
    if(isNaN(arvo)) throw "Et antanut numeroa!";
    else if(arvo <= 0) throw "Arvo on liian pieni!";
    else if(arvo > 10) throw "Arvo on liian suuri!";
    return true;
  } catch (e) {
    document.getElementById('vastaus').innerHTML = e;
    return false;
  } finally {

  }
}
