function tulostaNimi(etunimi, sukunimi) {
  console.log(`${enimi} ${sukunimi}`);
  return `${etunimi} ${sukunimi}`;
}
function tulostaNKertaa(n, arvo) {
  for (let i = 0; i < n; i++) {
    console.log(n);
  }
}

document.addEventListener("click", () => {
  console.log("napautettu");
});
setTimeout(() => {
  console.log("Aika");
}, 1000);
tulostaNimi("Kyle", "Cook");
tulostaNKertaa(5, "Heippa");
