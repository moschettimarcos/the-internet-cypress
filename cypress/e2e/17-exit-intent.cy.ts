describe('Exit Intent', () => {
  beforeEach(() => {
    cy.visit('/exit_intent');
  });

  it('deve exibir modal ao simular saída do viewport', () => {
    cy.get('body').trigger('mouseleave', { clientY: -10, force: true });
    cy.get('.modal', { timeout: 10000 }).should('be.visible');
    cy.get('.modal-footer p').click();
    cy.get('.modal').should('not.be.visible');
  });
});
