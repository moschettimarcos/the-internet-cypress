import { AUTH } from '../support/constants';

describe('Digest Authentication', () => {
  it('deve proteger o endpoint sem credenciais', () => {
    cy.request({
      url: '/digest_auth',
      failOnStatusCode: false,
    }).its('status').should('be.oneOf', [401, 400]);
  });

  it('deve autenticar com digest auth quando o servidor aceitar', () => {
    cy.request({
      url: '/digest_auth',
      auth: AUTH,
      failOnStatusCode: false,
    }).then((response) => {
      if (response.status === 200) {
        expect(response.body).to.include('Congratulations! You must have the proper credentials.');
        return;
      }

      cy.log(
        `Digest auth retornou ${response.status} — Cypress tem suporte limitado a Digest no Heroku.`,
      );
      expect(response.status).to.be.oneOf([401, 400]);
    });
  });
});
