// 2. vaihe
 let viimeksiRenderoity = 0;
// 4. vaihe, voit nopeuttaa tai hidastaa nopeutta, kts. konsoli
 const MADON_NOPEUS = 1
function main(currentTime)
{
  window.requestAnimationFrame(main);
  // 3. vaihe, jaetaan 1000, koska millisekunteja
   const sekuntejaViimeisestaRenderoinnista = (currentTime - viimeksiRenderoity)/1000;
  // 4. vaihe
  if(sekuntejaViimeisestaRenderoinnista < 1 / MADON_NOPEUS)
  {
    return;
  }
  // 3. vaihe, vaihda console.log:iin (sekuntejaViimeisestaRenderoinnista)
  // näytä selaimen konsolissa, kauanko menee päivityksessä (0.006...)
  // 1. vaihe, näytä selaimen konsolissa console.log(currentTime)
   console.log('Render');
   // 2. vaihe
   viimeksiRenderoity = currentTime;

}
window.requestAnimationFrame(main);
