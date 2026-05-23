/// <reference types="cypress" />

import { AUTH } from './constants';

Cypress.Commands.add('visitWithBasicAuth', (path: string) => {
  cy.visit({
    url: path,
    auth: {
      username: AUTH.username,
      password: AUTH.password,
    },
  });
});

Cypress.Commands.add('visitWithDigestAuth', (path: string) => {
  cy.visit({
    url: path,
    auth: {
      username: AUTH.username,
      password: AUTH.password,
    },
  });
});

Cypress.Commands.add('dragAndDrop', (source: string, target: string) => {
  const dataTransfer = new DataTransfer();

  cy.get(source).trigger('dragstart', { dataTransfer });
  cy.get(target).trigger('drop', { dataTransfer });
  cy.get(target).trigger('dragend');
});

declare global {
  namespace Cypress {
    interface Chainable {
      visitWithBasicAuth(path: string): Chainable<void>;
      visitWithDigestAuth(path: string): Chainable<void>;
      dragAndDrop(source: string, target: string): Chainable<void>;
    }
  }
}

export {};
