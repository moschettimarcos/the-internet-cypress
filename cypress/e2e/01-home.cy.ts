import { homePage } from '../pages/home.page';

describe('Home', () => {
  it('deve exibir a página inicial com todos os exemplos', () => {
    homePage.visit();
    homePage.getHeading().should('contain.text', 'Welcome to the-internet');
    homePage.getExampleLinks().should('have.length.at.least', 40);
  });
});
