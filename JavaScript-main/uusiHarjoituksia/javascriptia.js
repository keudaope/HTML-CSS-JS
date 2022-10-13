/*var pituus = [1189];
var leveys = [841];
var j;
for(var i = 1; i <= 8; i++)
{
  j = i-1;
  pituus.push(leveys[j]);
  leveys.push(pituus[j] / 2);
}
for(var k = 0; k <= 8; k++)
{
  console.log("A" + k + " = " + pituus[k] + " * " + leveys[k]);
}
var annluku, vuosi, kuukausi, viikko, paiva;
annluku = 373;
vuosi = parseInt(annluku / 365.25);
kuukausi = parseInt((annluku - (vuosi * 365)) / 30.4375);
viikko = parseInt((annluku - (vuosi * 365) - (kuukausi * 30)) / 7);
paiva = (annluku - (vuosi * 365) - (kuukausi * 30) - viikko * 7);
console.log(vuosi + " vuotta " + kuukausi + " kuukautta " + viikko + " viikkoa ja " + paiva + " paivaa");
var perusluku, exponentti, vastaus;
perusluku = 5;
exponentti = 3;
vastaus = Math.pow(5,3);
console.log(vastaus);
var potenssiluku, alkuluku;
potenssiluku = 36;
alkuluku = Math.sqrt(potenssiluku);
console.log(alkuluku);
var summa, aika, korko, kmaara;
summa = 1200;
aika = 2;
korko = 5.4;
kmaara = summa * aika * korko / 100;
console.log(kmaara);
var l1 = 7, l2 = 6;
if(l1 > l2)
{
  console.log(l1);
}
else
{
  console.log(l2);
}
var l1 = 6, l2 = 3, l3 = 5;
if(l1 > l2 && l1 > l3)
{
  console.log(l1);
}
else if(l3 > l2)
{
  console.log(l3);
}
else
{
  console.log(l2);
}
var l1 = 0;
if(l1 > 0)
{
  console.log("luku on positiivinen");
}
else if(l1 < 0)
{
  console.log("luku on negatiivinen");
}
else
{
  console.log("luku on nolla");
}
var l1 = 55;
if(l1%2 == 0)
{
  console.log("Luku on jaollinen kahdella");
}
if(l1%3 == 0)
{
  console.log("Luku on jaollinen kolmella");
}
if(l1%5 == 0)
{
  console.log("Luku on jaollinen viidellä");
}
if(l1%7 == 0)
{
  console.log("Luku on jaollinen seitsemällä");
}
if(l1%11 == 0)
{
  console.log("Luku on jaollinen yhdellätoista");
}
if(l1%13 == 0)
{
  console.log("Luku on jaollinen kolmellatoista");
}
if(l1%17 == 0)
{
  console.log("Luku on jaollinen seitsemällätoista");
}
if(l1%19 == 0)
{
  console.log("Luku on jaollinen yhdeksällätoista");
}
var l1 = 90;
if(l1%2 == 0)
{
  console.log("Luku on parillinen");
}
else
{
  console.log("Luku on pariton");
}
var l1 = 1900;
if(l1%4 == 0 && l1%100 != 0)
{
  console.log("luku on karkausvuosi");
}
else if(l1%400 == 0)
{
  console.log("Luku on karkausvuosi");
}
else
{
  console.log("Luku ei ole karkausvuosi");
}
var l1 = 'Ö';
if(l1 >= 'a' && l1 <= 'ö' || l1 >= 'A' && l1 <= 'Ö')
{
  console.log("annettu merkki on kirjain");
}
else
{
  console.log("Annettu merkki ei ole kirjain");
}
var l1 = 'Ä';
if(l1 >= 'a' && l1 <= 'ö' || l1 >= 'A' && l1 <= 'Ö')
{
  l1 = l1.toLowerCase();
  if(l1 == 'a' || l1 == 'e' || l1 == 'i' || l1 == 'o' || l1 == 'u' ||
  l1 == 'y' || l1 == 'å' || l1 == 'ä' || l1 == 'ö')
  {
    console.log("Annettu merkki on vokaali");
  }
  else
  {
    console.log("Annettu merkki on konsonantti");
  }
}
else
{
  console.log("Annettu merkki ei ole kirjain");
}
var l1 = '!';
if(l1 >= 'a' && l1 <= 'ö' || l1 >= 'A' && l1 <= 'Ö')
{
  console.log("Annettu merkki on kirjain!");
}
else if (l1 >= 0 && l1 <= 9)
{
  console.log("Annettu merkki on numero!");
}
else
{
  console.log("Annettu merkki on erikoismerkki!");
}
var l1 = '3';
if(l1 >= 'a' && l1 <= 'ö' || l1 >= 'A' && l1 <= 'Ö')
{
  if(l1 >= 'a' && l1 <= 'z' || l1 == 'å' || l1 == 'ä' || l1 == 'ö')
  {
    console.log("Annettu kirjain on pieni kirjain");
  }
  else
  {
    console.log("Annettu kirjain on iso kirjain");
  }
}
else
{
  console.log("Annettu merkki ei ole kirjain");
}
var l1 = '13';
if(l1 == 1 || l1 == 3 || l1 == 5 || l1 == 7 || l1 == 8 || l1 == 10 || l1 == 12)
{
  console.log("Kuukaudessa on 31 päivää");
}
else if(l1 == 4 || l1 == 6 || l1 == 9 || l1 == 11)
{
  console.log("Kuukaudessa on 30 päivää");
}
else if(l1 == 2)
{
  console.log("Kuukaudessa on 28 päivää");
}
else
{
  console.log("Ei ole annettua kuukautta!");
}
var l1 = '3999';
var temp;
var lista = "";
if(l1 >= 500)
{
  temp = parseInt(l1 / 500);
  lista += temp + " x 500€, ";
  l1 = l1 - (temp * 500);
}
if(l1 >= 200)
{
  temp = parseInt(l1 / 200);
  lista += temp + " x 200€, ";
  l1 = l1 - (temp * 200);
}
if(l1 >= 100)
{
  temp = parseInt(l1 / 100);
  lista += temp + " x 100€, ";
  l1 = l1 - (temp * 100);
}
if(l1 >= 50)
{
  temp = parseInt(l1 / 50);
  lista += temp + " x 50€, ";
  l1 = l1 - (temp * 50);
}
if(l1 >= 20)
{
  temp = parseInt(l1 / 20);
  lista += temp + " x 20€, ";
  l1 = l1 - (temp * 20);
}
if(l1 >= 10)
{
  l1 = Math.ceil(l1);
  temp = parseInt(l1 / 10);
  lista += temp + " x 10€, ";
  l1 = l1 - (temp * 10);

}
if(l1 >= 5)
{
  temp = parseInt(l1 / 5);
  lista += temp + " x 5€, ";
  l1 = l1 - (temp * 5);
}
if(l1 >= 2)
{
  temp = parseInt(l1 / 2);
  lista += temp + " x 2€, ";
  l1 = l1 - (temp * 2);
}
if(l1 >= 1)
{
  temp = parseInt(l1 / 1);
  lista += temp + " x 1€";
  l1 = l1 - (temp * 1);
}
console.log(lista);
var k1 = 87, k2 = 92, k3 = 65, k4 = 78, k5 = 51;
var keskiarvo = (k1 + k2 + k3 + k4 + k5) / 5;
if(keskiarvo > 90)
{
  console.log("Arvosanasi on K5");
}
else if(keskiarvo > 80)
{
  console.log("Arvosanasi on H4");
}
else if(keskiarvo > 70)
{
  console.log("Arvosanasi on H3");
}
else if(keskiarvo > 60)
{
  console.log("Arvosanasi on T2");
}
else if(keskiarvo > 50)
{
  console.log("Arvosanasi on T1");
}
else
{
  console.log("Arvosanasi on Hylätty");
}*/
