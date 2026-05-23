describe('Floating Menu', () => {
  beforeEach(() => {
    cy.visit('/floating_menu');
  });

  it('deve manter o menu visível ao rolar a página', () => {
    cy.get('#menu').should('be.visible');
    cy.scrollTo('bottom');
    cy.get('#menu').should('be.visible');
    cy.get('#menu ul li').should('have.length.at.least', 3);
  });
});
