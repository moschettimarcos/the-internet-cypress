describe('Inputs', () => {
  beforeEach(() => {
    cy.visit('/inputs');
  });

  it('deve aceitar apenas números no campo', () => {
    cy.get('input[type="number"]').type('12345').should('have.value', '12345');
    cy.get('input[type="number"]').clear().type('99.5').should('have.value', '99.5');
  });
});
