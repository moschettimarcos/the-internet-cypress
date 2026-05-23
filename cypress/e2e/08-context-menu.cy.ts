describe('Context Menu', () => {
  beforeEach(() => {
    cy.visit('/context_menu');
  });

  it('deve exibir alerta ao clicar com botão direito', () => {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub');
    });

    cy.get('#hot-spot').rightclick();
    cy.get('@alertStub').should('have.been.calledOnce');
    cy.get('@alertStub').should('have.been.calledWith', 'You selected a context menu');
  });
});
