describe('JavaScript onload event error', () => {
  it('deve carregar a página de exemplo com erro de script', () => {
    cy.on('uncaught:exception', () => false);
    cy.visit('/javascript_error');
    cy.get('p').should('contain.text', 'This page');
    cy.title().should('eq', 'Page with JavaScript errors on load');
  });
});
