/// <reference types="cypress" />

describe('Checkboxes', () => {
  it('deve marcar os top 5 filmes da marvel', () => {
    cy.visit('/checkboxes')

    const moveis = ['avengers', 'cap2', 'guardians', 'blackpanther', 'thor3']

    moveis.forEach(movie => {
      cy.get(`input[name=${movie}]`)
        .click()
        .should('be.checked')
    })
  })
})
