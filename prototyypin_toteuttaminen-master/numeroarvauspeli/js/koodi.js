const arvattava = Math.floor(Math.random() * 10);
var arvauskerrat = 1;
function arvaaNumero(){
  var arvaus = document.getElementById('arvaus').value;
  document.getElementsByTagName('p')[2].innerHTML = "";
  document.getElementById('arvaus').focus();

  if(arvauskerrat < 3){
    if(arvaus == arvattava && arvaus != "")
    {
      document.getElementsByTagName('p')[2].innerHTML = "OIKEIN!";
    }
    else if (arvaus < arvattava && arvaus != "")
    {
      document.getElementsByTagName('p')[2].innerHTML = "etsi ylempää!";
      document.getElementById('arvaus').value = "";
      document.getElementById('arvaus').focus();
    }
    else if(arvaus != "") {
      document.getElementsByTagName('p')[2].innerHTML = "etsi alempaa!";
      document.getElementById('arvaus').value = "";
      document.getElementById('arvaus').focus();
    }
    arvauskerrat++;
  }
  else{
    document.getElementsByTagName('p')[2].innerHTML = "Epäonnistuit!";
    document.getElementById('arvaus').value = "";
    document.getElementById('arvaus').focus();
    arvauskerrat = 0;
  }
}
