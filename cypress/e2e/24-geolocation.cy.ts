describe('Geolocation', () => {
  beforeEach(() => {
    cy.visit('/geolocation', {
      onBeforeLoad(win) {
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((success) => {
          success({
            coords: {
              latitude: -23.5505,
              longitude: -46.6333,
              accuracy: 100,
              altitude: null,
              altitudeAccuracy: null,
              heading: null,
              speed: null,
            },
            timestamp: Date.now(),
          });
        });
      },
    });
  });

  it('deve exibir coordenadas geográficas mockadas', () => {
    cy.get('#content button').click();
    cy.get('#lat-value').should('contain.text', '-23.5505');
    cy.get('#long-value').should('contain.text', '-46.6333');
  });
});
