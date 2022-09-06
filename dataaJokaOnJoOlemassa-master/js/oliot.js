var Ihminen = function(etunimi, sukunimi) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
}

var ekaIhminen = new Ihminen('Homer', 'Simpson');
var tokaIhminen = new Ihminen('Mickey', 'Mouse');

Ihminen.prototype.haeKokoNimi = function() {
    return this.etunimi + ' ' + this.sukunimi;
};

Ihminen.prototype.sanoHei = function() {
    console.log('Hei, ' + this.haeKokoNimi() + '!');
};

console.log(ekaIhminen.haeKokoNimi());
tokaIhminen.sanoHei();
