describe('File Download', () => {
  beforeEach(() => {
    cy.task('deleteFolder', 'cypress/downloads');
  });

  it('deve baixar arquivos disponíveis na página', () => {
    cy.visit('/download');

    cy.get('#content a').first().then(($link) => {
      const fileName = $link.text().trim();
      cy.wrap($link).click();
      cy.readFile(`cypress/downloads/${fileName}`, { timeout: 15000 }).should('exist');
    });
  });
});
