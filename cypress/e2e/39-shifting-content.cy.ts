describe('Shifting Content', () => {
  it('deve carregar imagem dinâmica', () => {
    cy.visit('/shifting_content/image');
    cy.get('#content img').should('be.visible').and('have.attr', 'src');
  });

  it('deve exibir lista dinâmica com itens de texto', () => {
    cy.visit('/shifting_content/list');
    cy.get('.example .row').should('contain.text', "Important Information You're Looking For");
    cy.get('.example .row').invoke('text').should('have.length.greaterThan', 20);
  });

  it('deve exibir menu', () => {
    cy.visit('/shifting_content/menu');
    cy.get('#content ul li a').should('have.length.at.least', 3);
  });
});
