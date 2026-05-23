describe('Sortable Data Tables', () => {
  beforeEach(() => {
    cy.visit('/tables');
  });

  const getColumnValues = (index: number): Cypress.Chainable<string[]> => {
    return cy.get(`#table1 tbody tr td:nth-child(${index})`).then(($cells) => {
      return Cypress.$.makeArray($cells).map((cell) => cell.textContent?.trim() ?? '');
    });
  };

  it('deve ordenar coluna Last Name em ordem crescente', () => {
    cy.get('#table1 thead th').contains('Last Name').click();
    getColumnValues(1).then((values) => {
      const sorted = [...values].sort((a, b) => a.localeCompare(b));
      expect(values).to.deep.equal(sorted);
    });
  });

  it('deve ordenar coluna Email em ordem decrescente', () => {
    cy.get('#table1 thead th').contains('Email').click().click();
    getColumnValues(3).then((values) => {
      const sorted = [...values].sort((a, b) => b.localeCompare(a));
      expect(values).to.deep.equal(sorted);
    });
  });
});
