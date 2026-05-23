describe('Drag and Drop', () => {
  beforeEach(() => {
    cy.visit('/drag_and_drop');
  });

  it('deve mover coluna A para a posição da coluna B', () => {
    const dataTransfer = new DataTransfer();

    cy.get('#column-a').trigger('dragstart', { dataTransfer });
    cy.get('#column-b')
      .trigger('dragenter', { dataTransfer })
      .trigger('dragover', { dataTransfer });
    cy.get('#column-b').trigger('drop', { dataTransfer });
    cy.get('#column-a').trigger('dragend');

    cy.get('#column-a header').should('have.text', 'B');
    cy.get('#column-b header').should('have.text', 'A');
  });
});
