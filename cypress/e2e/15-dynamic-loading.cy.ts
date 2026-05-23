describe('Dynamic Loading', () => {
  const assertHiddenElementLoaded = (examplePath: string) => {
    cy.visit(examplePath);
    cy.get('#start button').click();
    cy.get('#finish h4', { timeout: 15000 }).should('be.visible').and('contain.text', 'Hello World!');
  };

  it('deve aguardar elemento oculto - exemplo 1', () => {
    assertHiddenElementLoaded('/dynamic_loading/1');
  });

  it('deve aguardar elemento oculto - exemplo 2', () => {
    assertHiddenElementLoaded('/dynamic_loading/2');
  });
});
