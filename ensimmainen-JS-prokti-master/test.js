<script type="text/javascript">

function Henkilo(etunimi, sukunimi, ika)
{
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.ika = ika;

    this.syntymavuosi = Syntymavuosi;
}

function Syntymavuosi(tama_vuosi)
{
	// Syntymäaika lasketaan vähentämällä kuluvasta vuodesta ikä:
	var syntymavuosi = tama_vuosi - this.ika;

	// Metodi palauttaa syntymavuosi-muuttujan arvon:
	return syntymavuosi;
}

var Matti = new Henkilo("Matti", "Muukalainen", 24);
console.log(Matti.etunimi);
