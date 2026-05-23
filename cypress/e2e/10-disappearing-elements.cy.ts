describe('Disappearing Elements', () => {
  const knownLinks = ['About', 'Contact Us', 'Portfolio', 'Gallery'];

  it('deve exibir links de navegação no menu', () => {
    cy.visit('/disappearing_elements');
    cy.get('ul').first().find('li a').should('have.length.at.least', 1);
  });

  it('deve conter pelo menos um link conhecido conforme o viewport', () => {
    cy.viewport(1280, 720);
    cy.visit('/disappearing_elements');

    cy.get('ul').first().find('li a').then(($links) => {
      const texts = Cypress.$.makeArray($links).map((el) => el.textContent?.trim() ?? '');
      const hasKnownLink = knownLinks.some((label) => texts.includes(label));
      expect(hasKnownLink).to.be.true;
    });
  });
});
