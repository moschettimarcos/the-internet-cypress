import { loginPage } from '../pages/login.page';

describe('Form Authentication', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('deve fazer login com credenciais válidas', () => {
    cy.fixture('users').then((users) => {
      loginPage.login(users.valid.username, users.valid.password);
    });

    cy.url().should('include', '/secure');
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    cy.get('.button.secondary').click();
    cy.url().should('include', '/login');
  });

  it('deve exibir erro com credenciais inválidas', () => {
    cy.fixture('users').then((users) => {
      loginPage.login(users.invalid.username, users.invalid.password);
    });

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
    cy.url().should('include', '/login');
  });
});
