import { AUTH } from '../support/constants';

describe('Secure File Download', () => {
  beforeEach(() => {
    cy.task('deleteFolder', 'cypress/downloads');
    cy.visitWithBasicAuth('/download_secure');
  });

  it('deve baixar arquivo protegido por autenticação', () => {
    cy.get('#content a').first().then(($link) => {
      cy.request({
        url: $link.prop('href'),
        encoding: 'binary',
        auth: AUTH,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.length).to.be.at.least(0);
      });
    });
  });
});
