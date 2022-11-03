function kukkuu() {
  var eka = parseInt(document.getElementById('yksi').value);
  var toka = parseInt(document.getElementById('kaksi').value);
  var kolmas = parseInt(document.getElementById('kolme').value);
  var neljas = parseInt(document.getElementById('nelja').value);
  var viides = parseInt(document.getElementById('viisi').value);
  var lista = [];
  lista.push(eka);
  lista.push(toka);
  lista.push(kolmas);
  lista.push(neljas);
  lista.push(viides);
  lista = lista.sort((a,b) => a-b);
  pituus = lista.length;
  document.getElementById('v').innerHTML = "Suurin numero on: " + lista[pituus-1] + " ja pienin: " + lista[0];
}
