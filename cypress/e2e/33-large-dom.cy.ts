describe('Large & Deep DOM', () => {
  it('deve localizar elemento em DOM grande aninhado', () => {
    cy.visit('/large');
    cy.get('.example .parent').should('exist');
    cy.get('.example .parent div div').last().should('exist');
  });

  it('deve carregar a página deep DOM', () => {
    cy.visit('/large/deep');
    cy.get('#siblings').should('exist');
    cy.url().should('include', '/large/deep');
  });
});
