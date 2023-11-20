class Pankkitili
{
  set omistaja(om)
  {
    this._omistaja = om;
  }
  set tilinumero(tn)
  {
    this._tilinumero = tn;
  }
  get omistaja()
  {
    return this._omistaja;
  }
  get tilinumero()
  {
    return this._tilinumero;
  }
}
console.log(Pankkitili.omistaja);
Pankkitili.omistaja = "Vesa Jokipalo";
console.log(Pankkitili.omistaja);
const jyri = new Pankkitili();
jyri.omistaja = "Jyri Lindroos";
jyri.tilinumero = "123-456";
console.log(jyri.omistaja + " " + jyri.tilinumero);
const eeva = new Pankkitili();
eeva.omistaja = "Eeva Tervala";
eeva.tilinumero = "123-457";
console.log(eeva.omistaja + " " + eeva.tilinumero);
