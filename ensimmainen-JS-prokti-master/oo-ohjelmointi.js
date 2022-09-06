class Tili
{

constructor(en, sn, tn, saldo){
  this.etunimi = en,
  this.sukunimi = sn,
  this.tilinro = tn,
  this.saldo = saldo
}
talleta(lisaa)
{
  this.saldo += lisaa;
  console.log('uusi saldo on: '+this.saldo);
}
nosta(poista)
{
  this.saldo -= poista;
  console.log('uusi saldo on: '+this.saldo);
}

}
var heikki = new Tili('Heikki','Hilli','123-332',100);
console.log(heikki);
console.log(heikki.tilinro);
console.log(heikki.saldo);
heikki.nosta(50);
heikki.talleta(325);
