function laskeMinuutit()
{
  var tunnit, minuutit, minuuteiksi;
  tunnit = document.getElementByName('hour');
  minuutit = document.getElementByName('min');
  alert(tunnit + ' ' + minuutit);
  minuuteiksi = tunnit * 60 + minuutit;
  alert("Tänään on kulunut "+tunnit+"tuntia");
}
