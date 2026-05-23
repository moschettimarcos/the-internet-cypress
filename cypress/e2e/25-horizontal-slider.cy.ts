describe('Horizontal Slider', () => {
  beforeEach(() => {
    cy.visit('/horizontal_slider');
  });

  it('deve alterar o valor do slider', () => {
    cy.get('input[type="range"]').invoke('val', 4).trigger('change');
    cy.get('input[type="range"]').invoke('val').then((val) => {
      expect(Number(val)).to.be.closeTo(4, 0.5);
    });
  });
});
