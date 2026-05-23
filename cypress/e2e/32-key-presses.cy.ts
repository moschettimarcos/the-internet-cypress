describe('Key Presses', () => {
  beforeEach(() => {
    cy.visit('/key_presses');
  });

  it('deve registrar tecla Enter', () => {
    cy.get('#target').trigger('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13 });
    cy.get('#result').should('have.text', 'You entered: ENTER');
  });

  it('deve registrar tecla Escape', () => {
    cy.get('#target').type('{esc}');
    cy.get('#result').should('have.text', 'You entered: ESCAPE');
  });

  it('deve registrar tecla A', () => {
    cy.get('#target').type('a');
    cy.get('#result').should('have.text', 'You entered: A');
  });

  it('deve registrar tecla Z maiúscula', () => {
    cy.get('#target').type('Z');
    cy.get('#result').should('have.text', 'You entered: Z');
  });
});
