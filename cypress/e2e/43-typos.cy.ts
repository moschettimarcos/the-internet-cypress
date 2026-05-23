describe('Typos', () => {
  beforeEach(() => {
    cy.visit('/typos');
  });

  it('deve descrever o comportamento aleatório de typos', () => {
    cy.get('.example').should('contain.text', 'typo being introduced');
    cy.get('.example').should('contain.text', 'Sometimes you');
  });
});
