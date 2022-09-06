var numerot = [2, 3, 6, 9, 15, 35];
var parittomat = [1, 3, 7, 11];
var onParillinen = numerot.some(function(parillinen){
    	return parillinen%2 == 0;  });
console.log(onParillinen);
/*function kuutionTilavuus(leveys){
	return function(pituus){
    		return function(korkeus){
          			return leveys * korkeus * pituus;
    		}
	}
}
console.log(kuutionTilavuus(3)(4));*/
function kuutionTilavuus(leveys, pituus, korkeus){
	return leveys * korkeus * pituus;
}
var osittainenTaytto = kuutionTilavuus.bind(this, 5, 6);
console.log(osittainenTaytto(4));
