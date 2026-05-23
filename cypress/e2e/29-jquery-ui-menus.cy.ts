describe('JQuery UI Menus', () => {
  beforeEach(() => {
    cy.visit('/jqueryui/menu');
  });

  it('deve navegar pelos submenus', () => {
    cy.contains('Enabled').click();
    cy.contains('Back to JQuery UI').click();
    cy.url().should('include', '/jqueryui');
  });
});
