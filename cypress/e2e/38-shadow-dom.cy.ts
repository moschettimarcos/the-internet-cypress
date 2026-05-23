describe('Shadow DOM', () => {
  beforeEach(() => {
    cy.visit('/shadowdom');
  });

  it('deve expor shadow root e conteúdo slotted nos custom elements', () => {
    cy.get('my-paragraph')
      .eq(0)
      .should(($host) => {
        expect($host[0].shadowRoot).to.not.be.null;
        expect($host[0].shadowRoot?.querySelector('p')).to.exist;
      });

    cy.get('my-paragraph')
      .eq(0)
      .find('span[slot="my-text"]')
      .should('contain.text', "Let's have some different text!");

    cy.get('my-paragraph')
      .eq(1)
      .find('ul[slot="my-text"] li')
      .should('have.length', 2)
      .last()
      .should('contain.text', 'In a list!');
  });
});
