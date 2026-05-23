describe('Dynamic Controls', () => {
  beforeEach(() => {
    cy.visit('/dynamic_controls');
  });

  it('deve remover e restaurar checkbox', () => {
    cy.get('#checkbox-example input[type="checkbox"]').should('exist').check();
    cy.get('#checkbox-example button').click();
    cy.get('#checkbox-example input[type="checkbox"]').should('not.exist');
    cy.get('#checkbox-example').should('contain.text', "It's gone!");

    cy.get('#checkbox-example button').click();
    cy.get('#checkbox-example input[type="checkbox"]').should('exist');
    cy.get('#checkbox-example').should('contain.text', "It's back!");
  });

  it('deve habilitar input após loading', () => {
    cy.get('#input-example input').should('be.disabled');
    cy.get('#input-example button').click();
    cy.get('#input-example input', { timeout: 10000 }).should('be.enabled').type('Cypress');
    cy.get('#input-example').should('contain.text', "It's enabled!");
  });
});
