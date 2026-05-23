describe('Forgot Password', () => {
  beforeEach(() => {
    cy.visit('/forgot_password');
  });

  it('deve enviar formulário de recuperação de senha', () => {
    cy.get('#email').type('test@example.com');
    cy.get('#form_submit').click();
    cy.contains('Internal Server Error', { timeout: 15000 }).should('be.visible');
  });
});
