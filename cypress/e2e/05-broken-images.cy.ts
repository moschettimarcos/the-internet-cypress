describe('Broken Images', () => {
  beforeEach(() => {
    cy.visit('/broken_images');
  });

  it('deve identificar imagens quebradas e válidas', () => {
    cy.get('#content .example img').should('have.length', 3);

    cy.get('#content .example img[src*="avatar-blank"]').each(($img) => {
      expect(($img[0] as HTMLImageElement).naturalWidth).to.be.greaterThan(0);
    });

    cy.get('#content .example img').not('[src*="avatar-blank"]').each(($img) => {
      expect(($img[0] as HTMLImageElement).naturalWidth).to.eq(0);
    });
  });
});
