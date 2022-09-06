// var ja let määrittelyn ero
// var on globaali muuttujamäärittely, kun taas let on paikallinen
// muuttujamäärittely, alla esimerkki, jossa muuttuja määritetään silmukassa
// ja sitä yritetään käyttää silmukan ulkopuolella
for(var v = 0; v<10; v++)
{
  console.log(v+" .kierros");
}
console.log(v);
// Sama let-määrityksen kanssa
for(let l = 0; l<10; l++)
{
  console.log(l+" .kierros");
}
console.log(l);

// harjoitus 1
var firstname = 'Lata';

// harjoitus 2
let x = 'Geeta';
// vastaus
x = 'Geeta';

// harjoitus 3
let flower = 'rose';
let tree = 'maple';

// harjoitus 4
let x1 = 'Tic';
x1 = 'Tac';
x1 = 'Toc';
// vastaus
x1 = 'Toc';

// harjoitus 5
let x2 = 'Laurel';
let y = 'Hardy';
let z = y; // z = 'Hardy';
y = x2; // y = 'Laurel';
x = z; // x = 'Hardy';
// vastaus
x2 = 'Hardy';
