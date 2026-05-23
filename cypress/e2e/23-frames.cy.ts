describe('Frames', () => {
  beforeEach(() => {
    cy.visit('/frames');
  });

  it('deve navegar para iframe e validar conteúdo', () => {
    cy.contains('a', 'iFrame').click();
    cy.get('#mce_0_ifr').its('0.contentDocument.body').should('not.be.empty');
    cy.get('#mce_0_ifr')
      .its('0.contentDocument.body')
      .should('contain.text', 'Your content goes here.');
  });

  it('deve interagir com nested frames', () => {
    cy.visit('/nested_frames');
    cy.get('frame[name="frame-top"]').its('0.contentDocument.body').find('frame[name="frame-left"]')
      .its('0.contentDocument.body').should('contain.text', 'LEFT');
  });
});
