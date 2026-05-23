import { AB_TEST_HEADINGS } from '../support/constants';

describe('A/B Testing', () => {
  beforeEach(() => {
    cy.visit('/abtest');
  });

  it('deve exibir uma das variações do teste A/B', () => {
    cy.get('h3').invoke('text').then((heading) => {
      expect(AB_TEST_HEADINGS).to.include(heading.trim());
    });
  });
});
