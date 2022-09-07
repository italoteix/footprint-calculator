/// <reference types="cypress" />

describe('Success flow', () => {
  it('should show the footprint after form submission', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('From*').click();
    cy.get('#react-select-3-option-0').click();

    cy.contains('To*').click();
    cy.get('#react-select-5-option-1').click();

    cy.get('.css-1jj9yua > :nth-child(1)').click();

    cy.get('select').select(2);

    cy.get('.chakra-button').click();
    cy.contains('1089.10 kg');
  });
});
