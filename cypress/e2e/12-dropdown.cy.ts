describe('Dropdown', () => {
  beforeEach(() => {
    cy.visit('/dropdown');
  });

  it('deve selecionar opções no dropdown', () => {
    cy.get('#dropdown').select('1').should('have.value', '1');
    cy.get('#dropdown option:selected').should('have.text', 'Option 1');

    cy.get('#dropdown').select('2').should('have.value', '2');
    cy.get('#dropdown option:selected').should('have.text', 'Option 2');
  });
});
