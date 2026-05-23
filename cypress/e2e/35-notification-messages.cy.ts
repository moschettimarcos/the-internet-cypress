describe('Notification Messages', () => {
  beforeEach(() => {
    cy.visit('/notification_message');
  });

  it('deve exibir mensagem flash ao clicar no link', () => {
    cy.get('#flash-messages').should('contain.text', 'Action successful');
    cy.contains('a', 'Click here').click();
    cy.get('#flash-messages .flash').should('be.visible').and('not.be.empty');
  });
});
