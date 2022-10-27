// Yksilötestaukset
const {summa, kerto, jako, vahennys} = require('./aritmeettiset');
/*test('2 + 3 = 5', () => { expect(summa(2,3)).toBe(5);});
test('2 * 3 = 6', () => {  expect(kerto(2,3)).toBe(6);});
test('6 / 2 = 3', () => {
  expect(jako(6,3)).toBe(2);
});
test('6 - 2 = 4', () => {
  expect(vahennys(6,2)).toBe(4);
});*/
// Joukkotestit
test.each([[1, 1, 2], [-1, 2, 1], [2, 1, 3]])(
  '%i + %i equals %i', (a, b, expected) => {
    expect(summa(a,b)).toBe(expected);
  });
test.each([[1, 1, 1], [-1, 2, -2], [2, 3, 6]])(
  '%i * %i equals %i', (a, b, expected) => {
    expect(kerto(a,b)).toBe(expected);
  });
test.each([[1, 1, 1], [6, 3, 2], [10, 5, 2]])(
  '%i / %i equals %i', (a, b, expected) => {
    expect(jako(a,b)).toBe(expected);
  });
test.each([[1, 1, 0], [6, 3, 3], [10, 5, 5]])(
  '%i - %i equals %i', (a, b, expected) => {
    expect(vahennys(a,b)).toBe(expected);
  });
