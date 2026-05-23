import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  protected path = '/login';

  get usernameInput() {
    return cy.get('#username');
  }

  get passwordInput() {
    return cy.get('#password');
  }

  get submitButton() {
    return cy.get('button[type="submit"]');
  }

  get flashMessage() {
    return cy.get('#flash');
  }

  login(username: string, password: string): void {
    this.usernameInput.clear().type(username);
    this.passwordInput.clear().type(password);
    this.submitButton.click();
  }
}

export const loginPage = new LoginPage();
