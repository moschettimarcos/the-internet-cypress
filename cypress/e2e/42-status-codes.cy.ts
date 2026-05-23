describe('Status Codes', () => {
  const assertStatusPage = (code: number, message: string) => {
    cy.visit(`/status_codes/${code}`, { failOnStatusCode: false });
    cy.contains('p', message).should('be.visible');
  };

  it('deve exibir página de status 200', () => {
    assertStatusPage(200, 'This page returned a 200 status code');
  });

  it('deve exibir página de status 301', () => {
    assertStatusPage(301, 'This page returned a 301 status code');
  });

  it('deve exibir página de status 404', () => {
    assertStatusPage(404, 'This page returned a 404 status code');
  });

  it('deve exibir página de status 500', () => {
    assertStatusPage(500, 'This page returned a 500 status code');
  });
});
