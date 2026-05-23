import { BasePage } from './base.page';

export class HomePage extends BasePage {
  protected path = '/';

  getHeading(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('h1');
  }

  openExample(linkText: string): void {
    cy.contains('a', linkText).click();
  }

  getExampleLinks(): Cypress.Chainable<JQuery<HTMLAnchorElement>> {
    return cy.get('#content ul li a');
  }
}

export const homePage = new HomePage();
