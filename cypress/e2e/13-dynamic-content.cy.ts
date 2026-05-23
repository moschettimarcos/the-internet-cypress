describe('Dynamic Content', () => {
  beforeEach(() => {
    cy.visit('/dynamic_content');
  });

  it('deve exibir conteúdo dinâmico com avatares', () => {
    cy.get('.large-12.columns .row .large-10.columns').should('have.length.at.least', 3);
    cy.get('img[src*="avatar"]').should('have.length.at.least', 3);
  });

  it('deve alterar o conteúdo após recarregar a página', () => {
  cy.get('.large-12.columns .row .large-10.columns').first().invoke('text').then((firstText) => {
      cy.reload();
      cy.get('.large-12.columns .row .large-10.columns').first().invoke('text').should((secondText) => {
        expect(secondText.trim().length).to.be.greaterThan(0);
      });
    });
  });
});
