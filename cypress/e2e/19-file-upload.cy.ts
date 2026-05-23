describe('File Upload', () => {
  beforeEach(() => {
    cy.visit('/upload');
  });

  it('deve fazer upload de arquivo com sucesso', () => {
    cy.get('#file-upload').selectFile('cypress/fixtures/upload.txt', { force: true });
    cy.get('#file-submit').click();
    cy.get('#uploaded-files').should('contain.text', 'upload.txt');
  });
});
