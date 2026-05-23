describe('Checkboxes', () => {
  beforeEach(() => {
    cy.visit('/checkboxes');
  });

  it('deve marcar e desmarcar checkboxes', () => {
    cy.get('#checkboxes input[type="checkbox"]').eq(0).check().should('be.checked');
    cy.get('#checkboxes input[type="checkbox"]').eq(1).uncheck().should('not.be.checked');
  });
});
