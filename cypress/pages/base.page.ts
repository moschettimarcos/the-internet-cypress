export abstract class BasePage {
  protected abstract path: string;

  visit(): void {
    cy.visit(this.path);
  }

  getTitle(): Cypress.Chainable<string> {
    return cy.title();
  }
}
