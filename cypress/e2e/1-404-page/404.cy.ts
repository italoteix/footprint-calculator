/// <reference types="cypress" />

describe('Error 404', () => {
  it('go to 404 page on unknown route', () => {
    cy.visit('http://localhost:3000/asdf');
    cy.contains('Page not found!');
  });
});
