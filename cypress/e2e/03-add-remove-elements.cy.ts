describe('Add/Remove Elements', () => {
  beforeEach(() => {
    cy.visit('/add_remove_elements/');
  });

  it('deve adicionar e remover elementos dinamicamente', () => {
    cy.contains('button', 'Add Element').click();
    cy.contains('button', 'Add Element').click();
    cy.get('#elements .added-manually').should('have.length', 2);

    cy.get('#elements .added-manually').first().click();
    cy.get('#elements .added-manually').should('have.length', 1);

    cy.get('#elements .added-manually').click();
    cy.get('#elements .added-manually').should('not.exist');
  });
});
