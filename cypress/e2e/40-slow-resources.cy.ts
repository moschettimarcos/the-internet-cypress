describe('Slow Resources', () => {
  it('deve carregar página com recursos lentos', () => {
    cy.visit('/slow', { timeout: 120000 });
    cy.get('h3').should('contain.text', 'Slow Resources');
    cy.get('img', { timeout: 120000 }).should('have.length.at.least', 1);
  });
});
