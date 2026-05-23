import './commands';

beforeEach(() => {
  cy.on('uncaught:exception', (err) => {
    if (err.message.includes('ResizeObserver loop')) {
      return false;
    }
    if (err.message.includes('Script error')) {
      return false;
    }
    if (err.message.includes('Cannot read properties of undefined')) {
      return false;
    }
    return true;
  });
});
