const chai = window.chai;
const expect = chai.expect;

describe('getCelcius', () => {
  it('pitäisi muuttaa fahrenheiteista celsiukseiksi kaikki taulukon alkiot', () => {
    expect(getCelcius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5]))
  })
})
