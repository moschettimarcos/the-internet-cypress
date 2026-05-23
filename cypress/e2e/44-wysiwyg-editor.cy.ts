describe('WYSIWYG Editor', () => {
  beforeEach(() => {
    cy.visit('/tinymce');
  });

  it('deve editar conteúdo no editor TinyMCE', () => {
    const content = 'Texto automatizado com Cypress';

    cy.window({ timeout: 15000 }).should('have.property', 'tinymce');
    cy.window().then((win) => {
      const editor = win.tinymce.activeEditor;
      expect(editor).to.exist;
      editor.setContent(`<p>${content}</p>`);
    });

    cy.get('iframe', { timeout: 15000 })
      .its('0.contentDocument.body')
      .should('contain.text', content);
  });
});
