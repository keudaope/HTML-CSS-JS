const btn = document.getElementById("btn");
const sisalto = document.getElementById("sisalto");

btn.addEventListener("click", kasittelePainallus);

function kasittelePainallus(e) {
  if (btn.innerText === "päivitetty") {
    btn.innerText = "Paina minua";
    sisalto.innerText = "";
    return;
  }

  let text = "päivitetty";
  btn.innerText = text;

  kasitteleSisalto();
}

function kasitteleSisalto() {
  let stext = "Painike on päivitetty";
  sisalto.innerText = stext;
}
