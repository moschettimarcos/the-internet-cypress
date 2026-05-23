describe('Entry Ad', () => {
  beforeEach(() => {
    cy.visit('/entry_ad', {
      onBeforeLoad(win) {
        win.localStorage.setItem('modalShown', 'false');
      },
    });
  });

  it('deve fechar o modal de anúncio', () => {
    cy.get('.modal', { timeout: 10000 }).should('be.visible');
    cy.get('.modal-footer p').click();
    cy.get('.modal').should('not.be.visible');
  });
});
