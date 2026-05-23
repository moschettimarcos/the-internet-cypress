describe('Infinite Scroll', () => {
  beforeEach(() => {
    cy.visit('/infinite_scroll');
  });

  it('deve carregar mais conteúdo ao rolar até o fim', () => {
    cy.get('.scroll .jscroll-added, .scroll > *', { timeout: 10000 }).should('exist');
    cy.scrollTo('bottom', { duration: 1000 });
    cy.scrollTo('bottom', { duration: 1000 });
    cy.get('.scroll', { timeout: 20000 }).invoke('text').should('have.length.greaterThan', 50);
  });
});
