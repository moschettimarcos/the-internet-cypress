describe('Basic Auth', () => {
  it('deve acessar a área protegida com credenciais válidas', () => {
    cy.visitWithBasicAuth('/basic_auth');
    cy.get('p').should('contain.text', 'Congratulations! You must have the proper credentials.');
  });
});
