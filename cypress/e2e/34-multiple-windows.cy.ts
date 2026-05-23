describe('Multiple Windows', () => {
  beforeEach(() => {
    cy.visit('/windows');
  });

  it('deve abrir nova janela e validar título', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url as string;
      });
    });

    cy.contains('a', 'Click Here').invoke('removeAttr', 'target').click();
    cy.contains('h3', 'New Window').should('be.visible');
  });
});
