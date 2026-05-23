describe('Redirect Link', () => {
  it('deve seguir redirect para página de status codes', () => {
    cy.visit('/redirector');
    cy.get('#redirect').click();
    cy.url().should('include', '/status_codes');
    cy.contains('h3', 'Status Codes').should('be.visible');
  });
});
