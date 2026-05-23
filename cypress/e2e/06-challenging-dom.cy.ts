describe('Challenging DOM', () => {
  beforeEach(() => {
    cy.visit('/challenging_dom');
  });

  it('deve interagir com botões e validar a tabela', () => {
    cy.get('.button.alert').click();
    cy.get('#content table tbody tr').should('have.length.at.least', 3);
    cy.get('#content table tbody tr').first().find('td').should('have.length.at.least', 6);
  });
});
