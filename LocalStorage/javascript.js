

function syota() {
  const syottoAvain = document.getElementById('syottoAvain');
  const syottoArvo = document.getElementById('syottoArvo');
  const avain = syottoAvain.value;
  const arvo = syottoArvo.value;
  //console.log(avain + " " + arvo);
  if (avain && arvo) {
    localStorage.setItem(avain, arvo);
    listaa();
    //location.reload();
  }
}
function listaa() {
  for (let i = 0; i < localStorage.length; i++) {
    const avain = localStorage.key(i);
    const arvo = localStorage.getItem(avain);
    //console.log(avain + " " + arvo);
    pvSyotto.innerHTML += "<table><tr><td><b>" + avain + "</td><td>" + arvo
      + "</td><td><button type='button' id=" + avain + " onclick='poista(this)'>Poista tieto</button>" + "<br/></td></tr></table>";
    document.getElementById('syottoArvo').value = "";
    document.getElementById('syottoAvain').value = "";
    setTimeout(function () { pvSyotto.innerHTML = ""; }, 10000);

  }
}

function poista(tama) {
  const avain = tama.id;
  //alert(avain);
  localStorage.removeItem(avain);
  location.reload();
}
