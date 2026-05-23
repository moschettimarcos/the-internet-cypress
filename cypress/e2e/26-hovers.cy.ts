describe('Hovers', () => {
  beforeEach(() => {
    cy.visit('/hovers');
  });

  it('deve exibir caption ao passar o mouse sobre cada figura', () => {
    cy.get('.figure').each(($figure) => {
      cy.wrap($figure).trigger('mouseover', { force: true });
      cy.wrap($figure).find('.figcaption h5').should('exist').and('not.be.empty');
      cy.wrap($figure).find('.figcaption a').should('have.attr', 'href');
    });
  });
});
