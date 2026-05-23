describe('JavaScript Alerts', () => {
  beforeEach(() => {
    cy.visit('/javascript_alerts');
  });

  it('deve aceitar alert', () => {
    cy.on('window:alert', (text) => {
      expect(text).to.equal('I am a JS Alert');
    });
    cy.contains('button', 'Click for JS Alert').click();
    cy.get('#result').should('contain.text', 'You successfully clicked an alert');
  });

  it('deve confirmar confirm dialog', () => {
    cy.on('window:confirm', () => true);
    cy.contains('button', 'Click for JS Confirm').click();
    cy.get('#result').should('contain.text', 'You clicked: Ok');
  });

  it('deve cancelar confirm dialog', () => {
    cy.on('window:confirm', () => false);
    cy.contains('button', 'Click for JS Confirm').click();
    cy.get('#result').should('contain.text', 'You clicked: Cancel');
  });

  it('deve preencher prompt', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('Cypress QA');
    });
    cy.contains('button', 'Click for JS Prompt').click();
    cy.get('#result').should('contain.text', 'You entered: Cypress QA');
  });
});
