/// <reference types="cypress" />

describe('Radio', () => {
  it('deve marcar thor ragnarok', () => {
    cy.visit('/radios')

    cy.get('input[value=thor3]')
      .click()
      .should('be.checked')
  })
})
